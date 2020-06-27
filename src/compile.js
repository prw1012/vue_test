/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-24 14:57:21
 * @LastEditTime: 2020-06-27 21:23:02
 * @LastEditors: Do not edit
 * @FilePath: /vue02/src/compile.js
 * @Description:
 */

// 1. 获取并遍历DOM树
// 2. 文本节点：获取{{}}格式的内容并解析
// 3. 元素节点：访问节点特性，截获k-和@开头内容并解析
// new Compile('#app', vm)
class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      // 执行编译
      this.compile(this.$el);
    }
  }

  compile(el) {
    // 遍历el
    const childNodes = el.childNodes;
    // 每次拿出一个dom节点
    Array.from(childNodes).forEach(node => {
      // 判断节点类型
      if (this.isElement(node)) {
        // 3. 元素节点：访问节点特性，截获k-和@开头内容并解析
        // console.log('编译元素'+node.nodeName);
        this.compileElement(node);
      } else if (this.isInter(node)) {
        // 2. 文本节点：获取{{}}格式的内容并解析
        // console.log('编译插值文本'+node.textContent);
        this.compileText(node);
      }

      // 递归
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }

  isElement(node) {
    return node.nodeType === 1;
  }
  // 判断是否是插值表达式
  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }

  // 编译插值文本
  compileText(node) {
    // 获取表达式
    // {{a+b()}}
    const exp = RegExp.$1;
    this.update(node, exp, 'text');
  }

  // 通用方法 update(node, 'xxx', 'text')
  update(node, exp, dir) {
    // 构造更新函数并执行：相当于首次赋值
    let updaterFn = this[dir + 'Updater'];
    updaterFn && updaterFn(node, this.$vm[exp]);

    // 创建watcher，执行后续更新操作
    // 额外传递一个更新函数：能够更新指定dom元素
    new Watcher(this.$vm, exp, function(value) {
      updaterFn && updaterFn(node, value);
    });
  }

  compileElement(node) {
    // 获取属性
    const nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach(attr => {
      //   k-text="test"
      const attrName = attr.name; // k-text
      const exp = attr.value; // test
      if (attrName.indexOf('k-') === 0) {
        // 指令 k-text k-model
        const dir = attrName.substring(2); // text,html
        console.log('dir->', dir);
        this[dir] && this[dir](node, exp);
      }
      if (attrName.indexOf('@') === 0) {
        // 指令 @
        const dir = attrName.substring(1); // 事件类型
        this.eventHandler(node, exp, dir);
      }
    });
  }
  /* text */
  text(node, exp) {
    this.update(node, exp, 'text');
  }
  textUpdater(node, value) {
    node.textContent = value;
  }
  /* html */
  html(node, exp) {
    this.update(node, exp, 'html');
  }
  htmlUpdater(node, value) {
    node.innerHTML = value;
  }
  /* model */
  model(node, exp) {
    this.update(node, exp, 'model');
    node.addEventListener(
      'input',
      e => {
        console.log('console', e.target === node);
        // this.$vm[exp] = node.value;
        this.$vm[exp] = e.target.value;
      },
      false
    );
  }
  modelUpdater(node, value) {
    node.value = value;
  }

  eventHandler(node, exp, dir) {
    const fn = this.$vm.$options.methods && this.$vm.$options.methods[exp];
    if (dir && fn) {
      node.addEventListener(dir, fn.bind(this.$vm), false);
    }
  }
}
