  const jwt=require("jsonwebtoken");

const APP_SECRET="myappsecret",
const USERNAME="admin";
const PASSWORD="admin";
module.exports= function (req, res,next)
{
    if((req.url=="api/login"|| req.url=="/login") 
    && req.method=="POST"){
        if(req.body !=null && req.body.name==USERNAME
        && req.body.password==PASSWORD){
            let token = jwt.sign({data:USERNAME,expiresIn:"1h"},APP_SECRET);
            res.json ({success:true,token:token});
        
        }
        else{
            res.json({success:false})
        }
        res.end();
        return ;

    }

    else if(((( req.url.startWith("/api/products")
    || req.url.startWith("/products"))
    || (req.url.startWith("/api/categories")
    || req.url.startWith("/categories"))) && req.method !="GET")
    || ((req.url.startWith("/api/orders")
    || req.url.startWith("/orders")) && req.method !="POST"))
    {

let token =req.header["authorization"];
if(token != null && token.startWith("Bearer<")){
    token=token.substring(7,token.length -1);
    try{
        jwt.verify(token,APP_SECRET);
        next();
        return;
    }catch(err){}
}
res.statusCode=401;
res.end();
return;
}
next();

    
}