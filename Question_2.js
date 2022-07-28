function getUrlParameterValue(url, parameter){
    let p = url.split('?')[1];
    let q = new URLSearchParams(p);
    for(let element of q.entries()) 
    {
         if(element[0] == parameter)
         {
            console.log(element[1]);
         }
    }
}
