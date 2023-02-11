const http= require('http')


const server= http.createServer((req,res)=>{
    //res.write(req.url)
    if(req.url=='/home'){
        res.statusCode=200
        res.write('welcome from home')
    }else if(req.url=='/contact'){
        res.statusCode=200
        res.write('welcome from contact')
    }else if(req.url=='/about'){
        res.statusCode=200
        res.write('welcome from about')
    }else{
        res.statusCode=404
        res.write('page not found')
    }
    res.end()
    //console.log(res)
    // res.statusCode=200
    // res.setHeader("Context-type",'application/json')
    // res.write('welcome\n')
    // res.write('taha bellotef\n')
    // res.write('im 21\n')
    // res.write('tunisia\n')
    // res.end('done')
    


})

server.listen(5000,()=>(console.log('server running with port 5000')))