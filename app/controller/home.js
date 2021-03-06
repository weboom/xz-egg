// app/controller/home.js

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      retCode: '1',
      errCode: '99999',
      errMsg: '若需调用API, 请联系1056834607@qq.com分配APPID'
    }
  }

  async mainAdvert() {
    const list = [
      {
        img: 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/82821/30/11477/108517/5d8cafcfEa36c6fd9/0d7162b880fb1268.jpg!cr_1125x445_0_171!q70.jpg',
        url: 'https://m.baidu.com'
      },
      {
        img: 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/39975/6/2210/103146/5cbfdd4fEd359fb15/90c41bac5ab851de.jpg!cr_1125x445_0_171!q70.jpg',
        url: 'https://m.baidu.com'
      },
      {
        img: 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/68121/7/11381/151472/5d8e01c1E187dbef5/3294665a816d0e15.jpg!cr_1125x445_0_171!q70.jpg',
        url: 'https://m.baidu.com'
      },
      {
        img: 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/71176/35/11397/99815/5d8b45b4Eea9d85d3/a20846eb35f55bcb.jpg!cr_1125x445_0_171!q70.jpg',
        url: 'https://m.baidu.com'
      }
    ];
    this.ctx.body = {
      retCode: '0',
      errCode: '0',
      errMsg: '',
      data: {
        list: list
      }
    };
  }

  async mainMenu() {
    const menuList = [{
      name: '爱回收',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
      url: 'https://www.aihuishou.com/'
    }, {
      name: '转转',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
      url: 'https://m.zhuanzhuan.com/cycle/auction-series/index.html'
    }, {
      name: '京东',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
      url: 'https://m.jd.com/'
    }, {
      name: '京东到家',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png',
      url: 'https://daojia.jd.com/html/index.html?channel=jdapp#'
    }, {
      name: '京东美妆',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
      url: 'https://zpsy.jd.com/'
    }, {
      name: '京东拼团',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png',
      url: 'https://wqs.jd.com/pingou/index.shtml'
    }, {
      name: '珠宝',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png'
    }, {
      name: '二手车',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png'
    }, {
      name: '超值租借',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png'
    }, {
      name: '全部分类',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png'
    }];
    this.ctx.body = {
      retCode: '0',
      errCode: '0',
      errMsg: '',
      data: {
        list: menuList
      }
    };
  }
}

module.exports = HomeController;
