
let images
let submit_btn=document.getElementById("Submit_btn")
submit_btn.disabled=true;
async function addPost() {
    let title1=document.getElementById("title").value;
    let send_this_data={
        title:title1,
        images
    }; 
    
    try{
        let res=await fetch('http://localhost:3000/posts',{
            method:"POST",
            body:JSON.stringify(send_this_data),
            headers:{
                "Content-Type":"application/json",
            },
    });
 } catch(error){
            console.log(error);
        }
    }
    

// uploading image to imgbb api
let img_APIKEY="36b131384fe44ee9770def96f49a7cc0";
const handleImage= async(event)=>{
    let file=document.getElementById("image");
    let form=new FormData();
    // console.log(file);
    form.append("image", file.files[0]);

    let response = await fetch(
      `https://api.imgbb.com/1/upload?key=${img_APIKEY}`,
      {
        method: "POST",
        body: form,
      }
    );
    let data = await response.json();
    console.log( data);
    images = data.data.display_url;
  
    submit_btn.disabled = false;
  };
//code to delete apost from db
  async function deletePost() {
    let id=document.getElementById("delete_id").value;

    
    try{
        let res=await fetch(`http://localhost:3000/posts/${id}`,{//after entering a particular id we click on delete item that id will get here
            method:"DELETE",//as we are not adding anything to database we are not using body property as we did for addpost 
            headers:{
                "Content-Type":"application/json",
            },
    });
    let data=await res.json();
    console.log(data);
 } catch(error){
            console.log(error);
        }
    }

    async function updatePost() {
        let id=document.getElementById("update_id").value;
        let title=document.getElementById("update_title").value;
        let send_this_data={
            title//if property name and its value is same then we can write only once i.e title:title
        }

        
        try{
            let res=await fetch(`http://localhost:3000/posts/${id}`,{//after entering a particular id we click on delete item that id will get here
                method:"PATCH",//as we are not adding anything to database we are not using body property as we did for addpost 
                body:JSON.stringify(send_this_data),
                headers:{
                    "Content-Type":"application/json",
                },
        });
        let data=await res.json();
        console.log(data);
     } catch(error){
                console.log(error);
            }
        }    

        async function replacePost() {
            let id=document.getElementById("replace_id").value;
            let title=document.getElementById("replace_title").value;
            let send_this_data={
                title//if property name and its value is same then we can write only once i.e title:title
            }
    
            
            try{
                let res=await fetch(`http://localhost:3000/posts/${id}`,{//after entering a particular id we click on delete item that id will get here
                    method:"PUT",//as we are not adding anything to database we are not using body property as we did for addpost 
                    body:JSON.stringify(send_this_data),
                    headers:{
                        "Content-Type":"application/json",
                    },
            });
            let data=await res.json();
            console.log(data);
         } catch(error){
                    console.log(error);
                }
            }    

