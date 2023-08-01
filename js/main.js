let object0 = new Object();
    object0.name = "abraham";
    object0.programmer = true;
    object0.draw = function() { 
        console.log("hello");
    }
//object literally 
let object1 = { 
    name: "Abraham", 
    programmer: true,
    draw: function(){ 
        console.log(this)
    }
};
//factory function
let object2 = ()=> { 
    return {
        name: "Abraham", 
        programmer: true, 
        draw: function() { 
            console.log(this)
        }
    }
};
 
function object3() { 
    return { 
        name: "yolanda", 
        programmer: false,
        draw: function() { 
            console.log(this);
        }
    }
}
//constructor function
function Object4() { 
 
    this.name = "Abraham";
    this.programmer = true;
    this.draw = ()=> { 
        console.log(this);
    }
}

//classse

class A { 
    name = "Abraham";


    getName() { 
        console.log(this.name);
    }
}


class B extends A { 

    #programmer = false;

    married = false;
    
    constructor() { 
        super();
        console.log("hello")
    }

    getInfo(){ 
        console.log(this.name);
    }

    static GetOverHere(){ 
        console.log("mortal kombat")
    }
}

 
 //async await
console.log("start");

 async function getData() { 

    let result = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(result)
 };

 getData();
 console.log("finish");