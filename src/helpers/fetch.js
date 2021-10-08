const baseUrl="https://webappinode.herokuapp.com/";
const fetchP=(data,method='GET')=>{
    const url=`${baseUrl}`;
    if(method==='GET'){
        return fetch(`${url}`);
    }else{
        return fetch(`${url}`,{
            method:method,
            headers:{
            'Content-Type':'application/json',
        },body:JSON.stringify(data)});
    }
}
export{
    fetchP
}