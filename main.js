
//appel les elements de html par id 
let title     = document.getElementById('title');
let price     = document.getElementById('price');
let taxes     =document.getElementById('taxes');
let ads       =document.getElementById('ads');
let discount  =document.getElementById('discount');
let total     =document.getElementById('total');
let count     =document.getElementById('count');
let category  =document.getElementById('category');
let submit    =document.getElementById('submit');
 console.log(title,price,taxes,ads,discount,total,count,category,submit)

 ///get total 
function getTotal(){
    
if (price.value !='' && taxes.value !='' && ads.value !='' && discount.value !='') {
      let result = (+price.value +  +taxes.value +  +ads.value ) -  +discount.value ;
      total.innerHTML = result ;
      total.style.background  = '#cc0000'
  }
  else {
    total.innerHTML = '' ;
    total.style.background  = '#0088cc'
  }

}


 ///add new  medicament 

       // array
     let dataMed 
        //en vérifier l localStorage ,pour garder l'ancien data
     if (localStorage.medicament !=null) {
       dataMed = JSON.parse(localStorage.medicament) 
      }
      else {
        dataMed=[];
      }
 submit.onclick = function(){

    let newMedicament = {
        title :title.value,
        price :price.value,
        taxes :taxes.value,
        ads   :ads.value,
        discount :discount.value,
             //total n'est pas un input
        total :total.innerHTML,
        count :count.value,
        category:category.value, 
      
      }

             console.log(newMedicament)
               //l'ajout de l'objet au array ,selon le nombre si count=5 ajouter l'objet 5 fois  
               if(newMedicament.count>1){

                      for (let i = 0 ; i < newMedicament.count ; i++){
                        dataMed.push(newMedicament)

                      }

               }
               else {
       
                dataMed.push(newMedicament)
               }
               
        
        console.log(dataMed)
                //l'ajout d'array au localStorage parce que l array contient data de projet 
        localStorage.setItem('medicament'  ,    JSON.stringify(dataMed))
                 
                 //function pour vider les input
        clearData()
        
    }          

  

 ///function clear ,
 function clearData(){
       title.value='';
       price.value='';
       taxes.value='';
       ads.value='';
       discount.value='';
       total.innerHTML='';
       count.value='';
       category.value='';
 }
 


/////function read 


var tableBody = document.getElementById("tbody");

function  showData(){



  dataMed.forEach(function(item ,index) {
    // Create a new row using template literals
    var row = `<tr>
                 
                 <td>${item.title}</td>
                 <td>${item.price}</td>
                 <td>${item.taxes}</td>
                 <td>${item.ads}</td>
                 <td>${item.discount}</td>
                 <td>${item.total}</td>
                 <td>${item.count}</td>
                 <td>${item.category}</td>
                 <td><button onclick = "deleteData(${index})" id="delete">delete</button></td>
                 <td><button  id="update">update</button></td>
               </tr>`;
               
    // Append the row to the tbody element
    tableBody.innerHTML += row;

  });

    //pour afficher button delete all , s'il ya data in array 

        let deleteAll  = document.getElementById('deleteAll');

            if (dataMed.length > 0){
          deleteAll.innerHTML =` <button onclick = "deleteAll()" id="btnDelete">delete all</button>  `
              }
            else{
              deleteAll.innerHTML ='';

            }
            

}


showData()



///delete data
function deleteData(index){
    console.log(index);
    //supprimer data d'array
    dataMed.splice(index,1);
     //supprimer data de localStorage
localStorage.medicament = JSON.stringify(dataMed);


}


///delete all data
function deleteAll(){


  dataMed.splice(0); 
  localStorage.clear();
  

}


///update data 


///edit data





