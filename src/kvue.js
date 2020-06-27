/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-24 11:30:53
 * @LastEditTime: 2020-06-27 20:09:42
 * @LastEditors: Do not edit
 * @FilePath: /vue02/src/kvue.js
 * @Description:
 */

class KVue {
  constructor(options) {
    this.$options = options;
    this.$data = options && options.data;
    this.observe(this.$data);

    /*   // 测试
    //新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象
    new Watcher(this, 'test');
    //访问get函数，为了触发依赖收集
    this.test;
    new Watcher(this, 'foo.bar');
    this.foo.bar; */
    //执行编译

    new Compile(options.el, this);
    if (options.created) {
      options.created.call(this);
    }
  }

  observe(obj) {
    if (!obj || typeof obj !== 'object') {
      return;
    }
    Object.keys(obj).forEach(key => {
      this.defineReactive(obj, key, obj[key]);
      //代理data中的属性到vue根上
      this.proxyData(key);
    });
  }

  defineReactive(obj, key, val) {
    this.observe(val);
    //每次defineReactive创建一个Dep实例
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        //将Dep.target（即当前的Watcher对象存入Dep的deps中）
        Dep.target && dep.addDep(Dep.target); //Dep.target是watcher实例
        return val;
      },
      set(newval) {
        if (newval === val) return;
        val = newval;
        //在set的时候触发dep的notify来通知所有的Watcher对象更新视图
        dep.notify();
      },
    });
  }

  proxyData(key) {
    // 向Vue实例上面定义属性key
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key];
      },
      set(newVal) {
        this.$data[key] = newVal;
      },
    });
  }
}

class Dep {
  constructor() {
    //存取所有的依赖
    this.deps = [];
  }
  //在deps中添加一个监听器对象
  addDep(dep) {
    this.deps.push(dep);
  }
  //通知所有监听器去更新视图
  notify() {
    this.deps.forEach(dep => dep.update());
  }
}

//监听器：负责更新视图  Watcher: 执行具体更新操作
class Watcher {
  constructor(vm, key, updater) {
    this.vm = vm;
    this.key = key;
    this.updater = updater;

    Dep.target = this; // 依赖收集时要用到
    this.vm[this.key];
    Dep.target = null;
  }

  update() {
    this.updater.call(this.vm, this.vm[this.key]);
  }
}
