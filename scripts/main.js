export const appendData=(data,parent_div)=>{
    data.forEach((element)=>{
        let {title,image}=element;//destructuring 
        let div=document.createElement("div");
        let p=document.createElement("p");
        p.innerHTML=title;
        let image1=document.createElement("img");
        image1.src=image;
        div.append(p,image1);
        parent_div.append(div)
    })

}