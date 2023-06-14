/* 9주차 응용문제 수정 전
function login(){
	let form = document.querySelector("#form_main");
	let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
    
    form.action = "../index_login.html";
    form.method = "get"
    
	if(check.checked == true) { // 아이디 체크 o
		alert("쿠키를 저장합니다.");
		setCookie("id", id.value, 1); // 1일 저장
		alert("쿠키 값 :" + id.value);
	} 
	else { // 아이디 체크 x
		setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
	
    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.")
    }
	
	else{
		session_set(); //세션 생성
        form.submit();
    }
	
}*/


//9주차 연습문제 수정 후
/*function login(){
	let form = document.querySelector("#form_main");
	let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
    
    form.action = "../index_login.html";
    form.method = "get"
    
	if(check.checked == true) { // 아이디 체크 o
		alert("쿠키를 저장합니다.");
		setCookie("id", id.value, 1); // 1일 저장
		alert("쿠키 값 :" + id.value);
	} 
	else { // 아이디 체크 x
		setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
	
    if(id.value.length === 0 || password.value.length === 0){
		alert("아이디와 비밀번호를 모두 입력해주세요.");
    }
	else if(!login_id_check(id.value)){
		alert("이메일 형식이 잘못되었습니다. 다시 작성해주세요.");
	}
	else if(!login_password_check(password.value)){
		alert("숫자, 영문자, 특수문자 조합으로 8~16자리를 사용해야 합니다.");
	}
	else{
		session_set();	//세션 생성
		login_count();	//로그인 횟수 증가
        form.submit();
    }
}*/

//9주차 + 11주차 연습문제 추가
function login(){
	let form = document.querySelector("#form_main");
	let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
    
    form.action = "../index_login.html";
    form.method = "get"
    
	if(check.checked == true) { // 아이디 체크 o
		alert("쿠키를 저장합니다.");
		setCookie("id", id.value, 1); // 1일 저장
		alert("쿠키 값 :" + id.value);
	} 
	else { // 아이디 체크 x
		setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
	
	if(parseInt(cookieVal("failcheck")) > 4){
		alert("로그인 가능 횟수 5회를 초과했습니다. 5분간 로그인이 제한됩니다.");
		setTimeout("deleteCookie('failcheck');", 300000);
	}
	else{
		if(id.value.length === 0 || password.value.length === 0){
			login_fail();
			alert("아이디와 비밀번호를 모두 입력해주세요.");
		}
		else if(!login_id_check(id.value)){
			login_fail(); 
			alert("이메일 형식이 잘못되었습니다. 다시 작성해주세요.");
		}
		else if(!login_password_check(password.value)){
			login_fail();
			alert("숫자, 영문자, 특수문자 조합으로 8~16자리를 사용해야 합니다.");
		}
		else{
			session_set();	//세션 생성
			login_count();	//로그인 횟수 증가
			form.submit();
		}
	}
    
}

function logout(){
	session_del();	//세션 삭제
	logout_count();
	location.href = '../index.html';
}

//11주차 응용문제, 로그인 5분 후 로그아웃
function Timeout(){
	setTimeout("logout();", 300000);
}

//9주차 응용문제 login_check 함수 추가
function login_id_check(str){
	var email_check =  /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
	if(!email_check.test(str)){
		return false;
	}
	else{
		return true;
	}      
}

function login_password_check(str){	
	//숫자, 영문자, 특수문자 조합으로 8~16자리
	var password_check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
	if(!password_check.test(str)){
		return false;
	}
	else{
		return true;
	}
}

//10주차 응용문제 카운트
function cookieVal(cookieName){
	thisCookie = document.cookie.split("; ");
	for(i=0; i<thisCookie.length; i++){
		if(cookieName == thisCookie[i].split("=")[0]){
			return thisCookie[i].split("=")[1];
		}
	}
	return 0;
}

//10주차 응용문제 로그인 카운트
function login_count(){
	//var expireDate = new Date();
	//expireDate.setDate(expireDate.getDate() + 1);
	//var loginCnt = cookieVal("login_cnt");
	//document.cookie = "login_cnt=" + loginCnt + ";expires" + expireDate.toGMTString();
	//setCookie("login_cnt", loginCnt, 1);
	var loginCnt = parseInt(cookieVal("login_cnt"));
	if(isNaN(loginCnt)){
		loginCnt = 0;
	}
	loginCnt++;
	setCookie("login_cnt", loginCnt.toString(), 1);
}

//10주차 응용문제 로그아웃 카운트
function logout_count(){
	//var expireDate = new Date();
	//expireDate.setDate(expireDate.getDate() + 1);
	//var logoutCnt = cookieVal("logout_cnt");
	//document.cookie = "logout_cnt=" + logoutCnt + ";expires" + expireDate.toGMTString();
	var logoutCnt = parseInt(cookieVal("logout_cnt"));
	if(isNaN(logoutCnt)){
		logoutCnt = 0;
	}
	logoutCnt++;
	setCookie("logout_cnt", logoutCnt.toString(), 1);
}

//11주차 로그인 실패 카운트
function login_fail(){
	//var expireDate = new Date();
	//expireDate.setDate(expireDate.getDate() + 1);
	//var failCnt = cookieVal("failcheck");
	//document.cookie = "failcheck=" + failCnt + ";expires" + expireDate.toGMTString();
	var failCnt = parseInt(cookieVal("failcheck"));
	if(isNaN(failCnt)){
		failCnt = 0;
	}
	failCnt++;
	setCookie("failcheck", failCnt.toString(), 1);

}

function get_id(){
	if(true){
		decrypt_text();
	}
	else{
		var getParameters = function(paramName){ // 변수 = 함수(이름)
			var returnValue; // 리턴값을 위한 변수 선언
			var url = location.href; // 현재 접속 중인 주소 정보 저장
			var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
			for(var i = 0; i < parameters.length; i++) { 
				var varName = parameters[i].split('=')[0];
				if (varName.toUpperCase() == paramName.toUpperCase()) {
					returnValue = parameters[i].split('=')[1];
					return decodeURIComponent(returnValue);
					// 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
				}
			} // 2중 for문 끝
		}; // 함수 끝
		alert(getParameters('id') + '님 반갑습니다!'); // 메시지 창 출력
	} 
}

function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
	let id = document.querySelector("#floatingInput");
	let check = document.querySelector("#idSaveCheck");
	let get_id = getCookie("id");
    
	if(get_id) { 
		id.value = get_id; 
		check.checked = true; 
	}
	session_check();	//세션 유무 검사
}

function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src', jsname);
	th.appendChild(s);
}
addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수
