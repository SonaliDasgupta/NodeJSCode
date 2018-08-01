const express= require('express');
const bodyParser= require('body-parser');

const dishRouter= express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/').all((req, res, next)=>{
	res.statusCode= 200;
	res.setHeader("Content-Type","text/plain");
	next();
}).get((req, res, next)=>{
	res.end("will send all dishes");
}).post((req, res, next)=> {
	res.end('Will add the dish: '+req.body.name+' with details: '+req.body.description);
}).put((req, res, next)=> {
	res.statusCode=405;
	res.end('PUT not supported on /dishes');
	
}).delete((req, res, next)=> {
	res.end('Deleting all dishes');
});

module.exports = dishRouter;
