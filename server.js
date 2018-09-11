const jsonServer = require('json-server');
//const genData = require('./gen_data.js');

const server = jsonServer.create();
//const router = jsonServer.router(genData());
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use('/api', router);
server.use(middlewares);
server.use(jsonServer.defaults)
server.use(router);

// login get output modifying
router.render = function (req, res) {
  let resData = res.locals.data;
	console.log(req.url);
  if (req.url.match(/\/login.*/)) {
  	
  	if (resData.length == 1){
  		resData = resData[0];
  		res.jsonp({
  			userVerified: true,
  			userRole: resData.role
    	});
  	}
  	else{
  		res.jsonp({
  			userVerified: false
    	});
  	}
    
  } else {
    res.jsonp(res.locals.data)
  }
}

server.listen(port);