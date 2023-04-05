// 한 줄 주석 
/* 여러 줄 주석 */
var jb = 'hi';	//변수 선언 후 주석 처리
var a = 1;
var b;
b = 5;

if(true){	//자주 바뀌는 데이터는 let이용
	let c = 'let 접근';	//자바에서는 ""큰따옴표 아니고 ''작은따옴표 이용해도 괜찮다.
	var c_1 = 'var 접근';
}
//console.log(c); //Error?
console.log(c_1);

let d = 5;
//let d = '값 재할당'; //Error? 다른 데이터 타입으로 변환 불가능. '선언과 동시에 초기화'가 원칙이다.
console.log(d);

const e='상수 1 접근';	//바뀌지 않는 데이터는 const 이용
//e = 5;
//const f //Error?
console.log(e);

