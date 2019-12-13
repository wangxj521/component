/*vue配置文件*/

const path = require('path');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

let CompressionPluginObj = [];  //生成环境启动gzip压缩
if (process.env.NODE_ENV === 'production') {
	CompressionPluginObj = [
		new CompressionPlugin({
    	test: /\.js/,  //满足正则表达式的会被压缩
	    filename: '[path].gz[query]',  //目标文件名
	    algorithm: 'gzip',  //使用gzip压缩
	    threshold: 10240,  //资源文件大于10240b=10k时会被压缩
	  }),
	  new UglifyJsPlugin({   //处理压缩
      uglifyOptions: {
        warnings: false,
        compress: {
          drop_console: true,//console
          drop_debugger: false
        }
      }
    })
	]
}

module.exports = {
	publicPath: './',
	// 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    lintOnSave: false,
	chainWebpack: () => {},
	configureWebpack: {
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, './src')
        'src': '@',
        'components': 'src/components',
        'api': 'src/api',
        'config': 'src/config',
        'assets': 'src/assets',
        'pages': 'src/pages',
        'utils': 'src/utils',
        'store': 'src/store',
        'plugins': 'src/plugins'
      }
    },
    module: {
	    rules: [
            {
                test: /\.less$/,
                use: [
                    {
                    loader: 'style-loader',
                    },
                    {
                    loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                    loader: 'less-loader', // compiles Less to CSS
                        options: {
                        modifyVars: {
                            'primary-color': '#3576FF',
                            'link-color': '#3576FF',
                            'border-radius-base': '2px',
                            'text-color': '#333',
                        },
                        javascriptEnabled: true,
                        },
                    }
                ],
                include:[path.resolve(__dirname, '..', 'node_modules')]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                    loader: 'style-loader',
                    },
                    {
                    loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                    loader: 'sass-loader', // compiles Less to CSS
                    }
                ],
                include:[path.resolve(__dirname, '..', 'node_modules')]
            }
        ],
	  },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            CONFIG: ['config/hostConfig.js', 'default'],
	    }),
      ...CompressionPluginObj
    ]
  },
  devServer: {
    proxy: {
		'/iprp_middleground': {
			target: 'https://testmp.ipsebe.com',
			changeOrigin: true,
			pathRewrite : {
				'^/iprp_middleground': 'iprp_middleground'
			},
			secure: true,
		}
    }
  }
}
