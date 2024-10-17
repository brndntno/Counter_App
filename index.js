let count = 0;
    function increment() {
        let num = document.getElementById("count-el");
        count++;
        console.log(count);
        num.innerHTML = count;
    }
    function save() {
        let entry = document.getElementById("entries-el");
        entry.innerHTML = entry.innerHTML + count + " - ";
    }
    function expel() {
        let expelNum = prompt("How many students would you like to expel? ");
        let num = document.getElementById("count-el");
        count-=expelNum;
        console.log(count);
        num.innerHTML = count;
    }
