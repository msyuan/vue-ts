
module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    // 'postcss-pxtorem': {
    //   rootValue: 37.5,
    //   propList: ['*'],
    // },
    "postcss-px-to-viewport":{
    viewportWidth: 750, //视口宽度，这里设置为跟设计稿宽度一致；
    viewportHeight: 1334, //视口高度，随便设置一个就可以；
    unitPrecision: 3, //转换后值的精度，3表示保留3位小数；
    viewportUnit: 'vw', //转换成什么视口单位，这里当然是vw；
    fontViewportUnit: "vw",  // 字体使用的视口单位
    selectorBlackList: ['.ignore', '.hairlines'], //需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
    minPixelValue: 1, //最小像素值，大于等于这个值才会转换；
    mediaQuery: false, //是否转换媒体查询中的像素。
    replace: true,        // 是否直接更换属性值，而不添加备用属性
    exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  },
  }
};