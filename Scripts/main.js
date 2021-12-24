let mydiv = document.getElementById("myDiv");
// let mydiv_style = 
let q = -1;
function tCreateInput(){
    q++;
    let tInput = document.createElement("INPUT");
    tInput.setAttribute("class", "form-control");
    tInput.classList.add("my_input");
    document.getElementById("righttside").appendChild(tInput);

    let tButtonS = document.createElement("BUTTON");
    document.getElementById("righttside").appendChild(tButtonS);
    tButtonS.innerHTML = "SUCCESS";
    let tId = `idS_${q}`;
    tButtonS.setAttribute("id", tId);
    let t_elem = document.getElementById(tId);
    tButtonS.setAttribute("class", "btn btn-success")
    tButtonS.setAttribute("onclick", "ChangeColor(this)")

    let tButtonD = document.createElement("BUTTON");
    document.getElementById("righttside").appendChild(tButtonD);
    tButtonD.innerHTML = "DANGER";
    let tId2 = `idD_${q}`
    tButtonD.setAttribute("id", `idD_${q}`);
    let t_elem2 = document.getElementById(tId2);
    // console.log(tId2);
    // console.log(t_elem2);
    tButtonD.setAttribute("class", "btn btn-danger")
    tButtonD.setAttribute("onclick", "ChangeColor(this)");
    
}

// function CreateInput2(){
//     let tButtonS = document.createElement("BUTTON");
//     tButtonS.innerHTML = "SUCCESS";
//     tButtonS.setAttribute("class", "btn btn-success")
//     tButtonS.setAttribute("onclick", "ChangeColor('SUCCESS')")
//     document.getElementById("righttside").appendChild(tButtonS);

//     let tButtonD = document.createElement("BUTTON");
//     tButtonD.innerHTML = "DANGER"
//     tButtonD.setAttribute("class", "btn btn-danger")
//     tButtonD.setAttribute("onclick", "ChangeColor('DANGER')")
//     document.getElementById("righttside").appendChild(tButtonD);
// }


function ChangeColor(buttonname){
    // console.log(buttonname);
    let inputs = document.getElementsByTagName("INPUT");
    // console.log(document.getElementById(`idS_${q}`));

    for(let i=0; i <inputs.length; i++){
        if(buttonname == document.getElementById(`idS_${i}`)){
            inputs[i].style.backgroundColor = "green";
        }
        if(buttonname == document.getElementById(`idD_${i}`)){
            inputs[i].style.backgroundColor = "red";
        }
    }

}