document.addEventListener("DOMContentLoaded", function (){
    let weights = []

    let total = 0;

    let count = 0;

    document.getElementById("add-el").disabled = true;

    document.getElementById("average-el").disabled = true;
    document.getElementById("total-el").disabled = true;


    if (document.getElementById("add-el").disabled === true){
        document.getElementById("add-el").classList.add("disabled");

        if(document.getElementById("average-el").disabled === true){
            document.getElementById("average-el").classList.add("disabled")
        }
    }

    document.getElementById("weight-el").onkeyup = ()=>{
        document.getElementById("add-el").disabled = false;

        document.getElementById("add-el").classList.remove("disabled");

        document.getElementById("add-el").onclick = ()=>{
            weights.push(Number(document.getElementById("weight-el").value));

            let li = document.createElement("li");

            li.innerHTML = document.getElementById("weight-el").value;

            document.querySelector("ul").append(li);
    
    
            document.getElementById("weight-el").value = '';
    
            document.getElementById("add-el").disabled = true;
            document.getElementById("total-el").disabled = false;
            document.getElementById("add-el").classList.add("disabled");
        }
    }

    document.getElementById("total-el").onclick = ()=>{
        for (let i = 0; i<weights.length; i++){
            total+=weights[i];
        }
        document.getElementById("tot").textContent = "Total weight is: " + total + " g";

        document.getElementById("average-el").disabled = false;

        document.getElementById("average-el").classList.remove("disabled");

    }


    document.getElementById("average-el").onclick = ()=>{
        let average = Math.round(total/weights.length);
        document.getElementById("avg").textContent = "Average weight is: " + average + " g";
    }
    
})
