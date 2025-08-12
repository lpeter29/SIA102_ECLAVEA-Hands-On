const express = require(`express`);
const app = express();
const PORT = 8080;

app.get(`/`,(req,res)=> {
    res.send(`
        <html lang="en"><head>
            <meta charset="UTF-8">      
        
            <title>Server Maintenance</title>                 
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    color: #e74c3c;
                }
                p {
                    font-size: 1.2em;
                }   
                .maintenance {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    display: inline-block;
                }   
            </style>
        </head>     

        <body>
            <div class="maintenance">
                <h1>Server Under Maintenance</h1>
                <p>We are currently performing scheduled maintenance. Please check back later.</p>  
                <p>Thank you for your patience!</p>   
                <p>(under development)</p>       
            </div>   
        </body>
        </html>
        `)

});

app.listen(PORT, ()=>{
console.log(`Server is running on https://localhost:${PORT}`);

});
