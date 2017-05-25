var ref = { "name": "Affixus", "id": 2015 };

function hello() {
    console.log(this);
};

hello();
hello.call(ref);


// LEXICAL THIS
var ref1 = {
    "id": 1,
    "arr1": [1, 2, 3],
    "option1": function() {
        this.arr1.map((param1) => {
            this.id += param1;
        })
    }
};

console.log(ref1.id);
ref1.option1();
console.log(ref1.id);