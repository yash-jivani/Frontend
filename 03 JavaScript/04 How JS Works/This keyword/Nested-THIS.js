// ! FOR ALL REGULAR FUNCTION CALLS, THIS POINTS TO ("use strict"===true ? undefined : Window Object)
// For Arrow function THIS keyword Points => outer THIS (lexical THIS)

'use strict'

this.firstName = 'global'; // same as var firstName = 'global' | (bcoz var creates property in global object)

// 
const yashObj = {
  firstName: "Yash",

  hello : function (){
  // hello : () => {

          console.log(this);    // current obj
          console.log(`Hey ${this.firstName}`);

          // arrow function 
          const greet = () => {    
                    console.log(this);    // will points to outer scope
                    console.log(`Hey ${this.firstName}`);
                    
                    // regular function 
                    function tmp(){
                              console.log(this);          // undefined (with strict Mode) | Window (wihtout strict Mode)
                              console.log(`Hey ${this.firstName}`);   
                    }
                    tmp();
          }
          greet();
  }
};
yashObj.hello();
