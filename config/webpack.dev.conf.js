/**
 * Created by Administrator on 2018/9/18.
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig={
  filename: 'index.html', // 默认是index.html，服务器中设置的首页是index.html，如果这里改成其它名字，那么devServer.index改为和它一样，最终完整文件路径是output.path+filename，如果filename中有子文件夹形式，如`./ab/cd/front.html`，只取`./front.html`
  //template:  path.join(__dirname,"src", "index.html"), //如果觉得插件默认生成的hmtl5文件不合要求，可以指定一个模板，模板文件如果不存在，会报错，默认是在项目根目录下找模板文件，才模板为样板，将打包的js文件注入到body结尾处
  template:  "./src/index.html", //如果觉得插件默认生成的hmtl5文件不合要求，可以指定一个模板，模板文件如果不存在，会报错，默认是在项目根目录下找模板文件，才模板为样板，将打包的js文件注入到body结尾处
  inject:"head", // true|body|head|false，四种值，默认为true,true和body相同,是将js注入到body结束标签前,head将打包的js文件放在head结束前,false是不注入，这时得要手工在html中加js
}
module.exports = {
  mode: "development",
  devtool: 'eval-source-map',
  entry: './src/index', //main.js中的.js可以省略，前面的./不能省
  output:{
    filename:'[name].js', // dist文件夹不存在时，会自动创建
    //publicPath: './'
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"), //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
    port: 9000, //端口改为9000
    //open:true // 自动打开浏览器，适合懒人
  },
  plugins: [new HtmlWebpackPlugin(HtmlWebpackPluginConfig)], //实例化后放在plugins这个数组中就行
}
