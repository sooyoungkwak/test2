//1. 한줄주석


/* 2. 여러줄 주석 */


//3. 변수(variable) var, let, const
//3-1 var
var name="sooyoung";
console.log(name)
var name="jinyoung";
console.log(name)
//var 한 번 선언된 변수를 다시 선언할 수 있음

//3-2 let
let name1='sheung';
console.log(name1)
name1='jerry';
console.log(name1)
//let 한 번 선언된 변수를 다시 선언할 수 없음. 대신 재선언 가능

//3-3 const
const name2='kwak';
console.log(name2)
//const 선언과 동시에 값을 대입해야함. 되도록이면 변하지 않는 값을 사용할 때 선언 (보안상 다른 해커가 값을 변경하는 것을 막을 수 있음)


//4. type (premitive-[number, string, boolean, null, undefind, symbol, value], [object{}], [function] )
//4-1. number(숫자)
const count=17;
const size=17.8;
const infinity=1/0;

console.log(`value: ${count}, type: ${typeof count}`) // 백틱기호(템프럴 리터럴)
console.log("value: "+ count + ", type: " + typeof size);

//4-2 string(문자)
const char='c';
const names='sooyoung'
const greeting='hello ' + names;
console.log(`value: ${greeting}, type: ${typeof greeting}`)

//4-3 boolean(논리)
//false: 0, " ", null, undefined, NaN
//true: 다른 value 내용이나 값이 들어있는 것
const read=true;
const test= 3<1;
console.log(`value: ${read}, type: ${typeof read}`)
console.log(`value: ${test}, type: ${typeof test}`)

//4-4 null
let nothing=null;
console.log(`value: ${nothing}, type: ${typeof nothing}`)

//4-5 undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`)

//4-6 symbol
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2)// 유일한 값을 만들 때 필요

const gsymbol1=Symbol.for('id');
const gsymbol2=Symbol.for('id');
console.log(gsymbol1===gsymbol2)

//심볼은 바로 출력하면 오류가 남. 그래서 .description
console.log(`value: ${gsymbol1.description}, type: ${typeof gsymbol1}`)

//5. 호이스팅(아래의 선언만 끌어올림. 스코프(중괄호) 내부 어디서든 변수 선언은 최상위의 선언된 것처럼 행동.)

console.log(age)
var age='24'
console.log(age)

//6. 스코프 var: 함수 스코프, let, const: 블럭 스코프
var age1=30;
if(age1>19){
    let txt='성인'
    console.log(txt);
}


add(1, 2)
function add(num1, num2){
    var result=num1+num2;
    console.log(result)
}

