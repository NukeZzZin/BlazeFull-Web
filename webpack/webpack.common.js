const path = require("path");
const StatsPlugin = require("stats-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "../src/public/client.tsx"),
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[hash:base64]"
                            }
                        },
                    },
                ],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				use: "file-loader",
				type: "public/",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				use: "file-loader",
				type: "public/",
			},
		],
	},
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
	output: {
		publicPath: "/assets",
		path: path.resolve(__dirname, "../build/assets"),
		filename: "[contenthash].js",
	},
	plugins: [new StatsPlugin("../metastats.json")],
};