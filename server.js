const http=require("http")
const serv=http.createServer((req,res)=>{
res.write("<h1>Hello Node!!!!</h1>\n")
   
})
 serv.listen(3000,"127.0.0.1",()=>{

 })