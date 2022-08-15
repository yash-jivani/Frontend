// top level variables
let v1 = 111;

function one() {
    let v1 = "Inside One()-111 function";

    function two() {
        console.log(v1); // 111
    }

    function three() {
        let v1 = "inside Three()-333 function";
        console.log(v1); // 333
        two();
        four();
    }

    const four = () => {
        const v1 = "Inside Four()-444 function";

        function six() {
        console.log(v1); // 444
        }
        console.log(v1); // 444
        six();
        five();
    };

    const five = function () {
        // let v1 = "Inside Five()-555 function";
        console.log(v1); // 111
    };
    console.log(v1); // 111

    three();
}

one();
console.log(v1);
