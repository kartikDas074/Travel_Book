
//Insert Add Data
export async function insertBook(formData){
    'use server'
    const data=Object.fromEntries(formData.entries());
    const req=await fetch('http://localhost:5000/All',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const res=await req.json();
    console.log(res);
    return res;
}
//Featch All destinatio
export async function FeatchDes(params) {
    'use server'
    const res=await fetch('http://localhost:5000/All');
    const result=await res.json();
    return result;
}