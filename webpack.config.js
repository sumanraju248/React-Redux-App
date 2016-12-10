module.exports = {
		
    entry: [ './app/index.js']
        ,
		output: {
			filename: 'public/bundle.js'
		},
		devServer:{
			
			inline: true,
			port: 8000
		},
		module: {
			
			loaders:[
			         {
			        	 test: /\.jsx?$/,
			        	 exclude: /node_modules/,
			        	 loader: 'babel',
			        	 query: {
			        		 
			        		 presets: ['es2015', 'react']
			        	 }
			        	 
			         }
	    ]
		
		}
}