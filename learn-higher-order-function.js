

const languge =  (keyWord , value) => {

    if(keyWord.toLowerCase() == 'say') {
        console.log(value);
    }

};


const extract = (code, runner) => {
    return runner(...code.split(' '));
};


console.log('#'.repeat(80));
console.log('with callback');
extract("say hello", languge);


const between = (fn) => {
    return () => {
        console.log("on start");
        fn();
        console.log('on end');
    };
};


const hello = () => console.log('hello');


console.log('#'.repeat(80));
console.log("with recerun");
const fn = between(hello);
fn();



