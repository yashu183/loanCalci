const frm = document.querySelector("#loan-form")

console.log(frm);

frm.addEventListener("submit",calRes);

function calRes(e)
{    
    e.preventDefault();
    console.log("there");
    console.log(e);
    //Grabbings input forms from ui
    const amount = document.querySelector("#amount");
    const interest = document.querySelector("#interest");
    const years = document.querySelector("#years");

    //extracting values from input form
    const p = parseFloat(amount.value);
    const r = parseFloat(interest.value)/100/12;
    const n = parseFloat(years.value)*12;

    //grabbing elements to display output
    const monPay = document.querySelector("#monthly-payment");
    const totPay = document.querySelector("#total-payment");
    const totInt = document.querySelector("#total-interest");

    //calculating the results using formulae...
    const x = Math.pow(1+r,n);
    const mon = (p*x*r)/(x-1);

    if(isFinite(mon))
    {
        monPay.value = mon.toFixed(3);
        totPay.value = (mon*n).toFixed(3);
        totInt.value = (mon*n-p).toFixed(3);

        //grabbing spin div
        const spn = document.querySelector(".spin");
        spn.style.display = "block";
        setTimeout(userExp,2000);
    }
    else
    {
        errorLog("Please check numbers");
    }
}

function errorLog(s)
{
    console.log(s);
    //Grabbing elements 
    const car = document.querySelector(".card");
    const head = document.querySelector(".heading")

    //Creating elements
    const errDiv = document.createElement("div")
    errDiv.className = "alert alert-danger";
    errDiv.appendChild(document.createTextNode(s));
    errDiv.style.margin= "10px";
    //appending elements
    car.insertBefore(errDiv,head);

    //clearing error after 1.5 sec
    setTimeout(clrErr,1500);
}

function clrErr()
{
    document.querySelector(".alert").remove();
}

function userExp()
{
    //grabbing spin div
    const spn = document.querySelector(".spin");
    spn.style.display = "none";

    //grabbing results div
    const res = document.querySelector("#results");
    res.style.display = "block";
}