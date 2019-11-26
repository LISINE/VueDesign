module.exports = {
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true
            },
             '/web1' : {
                target : 'http://localhost:8080',
                changeOrigin : true
            }
        }
    }
}