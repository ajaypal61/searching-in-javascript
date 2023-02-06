

// const searchfun = () =>{
//     let input = document.getElementById('text').value.toUpperCase();
//     // console.log(input);

//     let mytable = document.getElementById("table");
//     let tr = mytable.getElementsByTagName("tr");

//     for(var i=0; i<tr.length; i++){
//         let td = tr[i].getElementsByTagName('td')[0];

//         if(td){
//             let textvalue = td.innerHTML;
//             if(textvalue.toUpperCase().indexOf(input) > -1){
//                 tr[i].style.display="";
//             }else{
//                 tr[i].style.display= "none";
//             }
//         }
//     }
// }


const searchFun = () =>{
    let input = document.getElementById("myInput").value.toUpperCase();
    // console.log(input);
    let myTable = document.getElementById("myTable");

    let tr = myTable.getElementsByTagName("tr");
    
    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[1];

        if(td){
            let textvalue = td.innerHTML;
            if(textvalue.toUpperCase().indexOf(input) > -1){
                tr[i].style.display="";
            }else{
                tr[i].style.display= "none";
            }
        }
    }
};

