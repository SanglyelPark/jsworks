//놀이공원 입장료 계산
var age = 15;    // 나이
var charge = 0; //입장료

if(age < 8){
    document.write("취학전 아동입니다. <br>");
    charge = 1000; //입장료 1000원
    // document.write("입장료는 " + charge + "원 입니다.")
}
else if(age >= 8 && age < 14 ) {
    document.write("초등학생 입니다. <br>");
    charge = 2000; //입장료 1000원
    // document.write("입장료는 " + charge + "원 입니다.")

}
else if(age >= 14 && age < 20 ) {
    document.write("중, 고등학생 입니다. <br>");
    charge = 2500; //입장료 1000원
    // document.write("입장료는 " + charge + "원 입니다.")

}
else{
    document.write("성인입니다.. <br>");
    charge = 3000; //입장료 1000원
    // document.write("입장료는 " + charge + "원 입니다.")

}

document.write("입장료는 <span>" + charge + "</span>원 입니다.");