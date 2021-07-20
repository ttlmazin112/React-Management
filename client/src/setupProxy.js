
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:5000/',
      changeOrigin: true
    })
  );
};

// client package.json 에서 proxy가 먹지 않을 때 $ npm install http-proxy-middleware --save
// 설치 후 setupProxy.js를 설치해 준다.