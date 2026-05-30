'use server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


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
export async function FeatchDes() {
    'use server'
    const res=await fetch('http://localhost:5000/All');
    const result=await res.json();
    return result;
}

//Fetch Single Data

export async function FeatchSingleDes(userId){
   const res=await fetch(`http://localhost:5000/All/${userId}`);
   const result=await res.json();
   return result;
}

//Update data with Patch

export async function UpdateBokking(userId,formdata){
    const req=await fetch(`http://localhost:5000/All/${userId}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
    })
    const res=await req.json();
    console.log(res);
    if(res.modifiedCount!=0){
      revalidatePath(`/all/${userId}`)
    }
    return res;
}

//Delete Functionality

export async function DelDes(userId){
   const res=await fetch(`http://localhost:5000/All/${userId}`,{
    method:'DELETE'
   });
   const result=await res.json();
   if(result. deletedCount!=0)redirect('/all')
   return result;
}
