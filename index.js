window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


function save(){
    var Name = document.getElementById("Name").value;
    var Address = document.getElementById("Address").value;
    var Contact= document.getElementById("Contact").value;




    if(Name === '' || Address === '' || Contact === '' || Symptom1 === '' || Symptom2 === '' || Symptom3 === ''){
      alert("Kindly enter your details");
    }

    else{
        Swal.fire(Name + ', we have received your details. Thank you for choosing us.');

    }

     
     event.preventDefault();


}
  
     
 function upload(){
    var Symptom1 = document.getElementById("Symptom1").value;
    var Symptom2 = document.getElementById("Symptom2").value;
    var Symptom3 = document.getElementById("Symptom3").value;

    if(Symptom1 === '' || Symptom2 === '' || Symptom3 === ''){
        alert("Kindy enter your symptoms");
      }

   else {
             Swal.fire(' Your symptoms have been recorded. Thank you for choosing us.');

            }

    event.preventDefault();
}

document.getElementById('search_doc').addEventListener('submit', searchDoc)
function searchDoc(e){
    e.preventDefault()
    let input=e.target.doctors.value
    console.log(input)
    fetch(`http://localhost:3000/`)
    .then(res=>res.json())
    .then(data=>console.log(data))
}
 
