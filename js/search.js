document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = [];	//빈 배열 : 전역 변수

/*function search_message(){
	alert("검색을 수행합니다!"); 
	let search_str = document.querySelector("#search_txt"); // 변수에 저장
	document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
	console.log(search_str.value); // 콘솔에 출력
}*/

/*function search_message(){
	let search_str = document.querySelector("#search_txt");
	if(search_str.value.length === 0){
		alert("검색어가 비었습니다. 입력해주세요"); 
	}
    else{
		alert("검색을 수행합니다!");
		search_array.push(search_str.value); // 배열에 검색어 추가
		let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
		document.querySelector("#form_main").submit();
	}
}*/

function search_message(){
	/*var BadWords = ['시발', '지랄', '개새끼'];
	for(var n = 0; n < 3; n++){
		if(search_str.value === BadWords[n]){
			alert("비속어가 감지되었습니다.");
		}
	}*/
	var BadWords = ["바보", "멍청이", "지랄"];
	let search_str = document.querySelector("#search_txt");
	
	if(search_str.value === BadWords[0]||search_str.value === BadWords[1]||search_str.value === BadWords[2]){
		alert("비속어가 감지되었습니다.")
	}
	
	else if(search_str.value.length === 0){
		alert("검색어가 비었습니다. 입력해주세요"); 
	}
	
    else{
		alert("검색을 수행합니다!");
		search_array.push(search_str.value); // 배열에 검색어 추가
		let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
		document.querySelector("#form_main").submit();
	}
}
