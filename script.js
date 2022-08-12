


let text1=document.getElementById('user value');
let button1=document.getElementById('button1');
let output1=document.getElementById('output1')

function foo() {

  output1.innerHTML=text1.value
}

button1.addEventListener('click',foo)


async function foo(){
let result=await fetch("https://www.anapioficeandfire.com/api/books");
let result1= await result.json();
console.log(result1);


document.addEventListener("DOMcontent",async()=>{

      let result1 =[];
      try{
        result1 = await foo();
      } catch(ele){
        console.log("Error!");
        console.log(ele);
      }
      console.log(result1)
});




for (var i=0;i<=result1.length-1;i++){
    console.log(result1[i]);

    let div=document.createElement("div");
    div.innerHTML=
    
   
    ` <div class="container">
                        <div class="row">
                          <div class="col-md-6">
                             <div class="card">
                             <div class="card-body">

                             
                                <h4 class="card-title"><b>Book Name :${result1[i].name}</b></h4>
                                <h5 class="card-title"><b>ISBN :</b>${result1[i].isbn}</h5>
                                <h5 class="card-title"><b>Number Of Pages :</b>${result1[i].numberOfPages}</h5>
                                <h5 class="card-title"><b>Author :</b>${result1[i].authors}</h5>
                               <h5 class="card-title"><b>Publisher :</b>${result1[i].publisher}</h5>
                               <h5 class="card-title"><b>Released Date :</b>${result1[i].released}</h5>
                               <h4 class="card-title"><b>url :</b></h4>
                                
                               <a href="${result1[i].url}" class="search">${result1[i].url}</a>
                               
                               
                               <h5 class="card-title"><b>Character Names :</b></h5>
                           
                               <a href="${result1[i].characters[0]}" class="search">${result1[i].characters[0]}</a>
                               <a href="${result1[i].characters[1]}" class="search">${result1[i].characters[1]}</a>
                               <a href="${result1[i].characters[2]}" class="search">${result1[i].characters[2]}</a>
                               <a href="${result1[i].characters[3]}" class="search">${result1[i].characters[3]}</a>                                        
                               <a href="${result1[i].characters[4]}" class="search">${result1[i].characters[4]}</a>
                                 </div>
                             </div>
                          </div> 

                          
                        </div>
                     </div>


                     <div>
                     <nav aria-label="Example">
                          <ul class="pagination justify-content-center">
                        <li class="page-item">
                         <span class="page-link">Previous</span>
                            </li>
                     <li class="page-item active"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                       <li class="page-item"><a class="page-link" href="#">3</a></li>
                       <li class="page-item"><a class="page-link" href="#">4</a></li>
                      <li class="page-item"><a class="page-link" href="#">5</a></li>

                      <li class="page-item"><a class="page-link" href="#">Next</a></li>


                           </ul>
                           </nav> 
          
                 </div>`

                 
                 
                   
document.body.append(div)
  
}

}
foo()

