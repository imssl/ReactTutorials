
 export function currencyRate(){

 //1) Fails on CORS. Not allowed because no headers in Mockoon
    // fetch('http://localhost:7003/currencies/exchange')
    //     .then(processResponse)
    //     .catch(processError)
    // }

 //2) This one will work but returns too early
 let responseData = fetch('http://localhost:7003/currencies/exchange',{
    method: "GET",
    headers: {"Content-type": "application/json"}
  }).then(response => response.json())
    .then(data =>{
        console.log(data);
        return data;
    } )
    .catch(error => {
        console.log(error)
        return {
            "error":error.message
        }
    });

    return responseData;
}

