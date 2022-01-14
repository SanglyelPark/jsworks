/* 성적 점수가 90점 이상이면 'A학점' 출력
 성적 점수가 80점 이상이면 'B학점' 출력
 성적 점수가 70점 이상이면 'C학점' 출력
 성적 점수가 60점 이상이면 'D학점' 출력
 성적 점수가 60점 미만이면 'F학점' 출력
*/

let score = "76";
let grade;


if(score >= 90){
    grade = "A학점";
    }
else if(score >= 80 && score < 90){
    grade = "B학점";
}
else if(score >= 70 && score < 80){
    grade = "C학점";
}
else if(score >= 60 && score < 70){
    grade = "D학점";
}
else{
    grade = "F학점";
}

document.write(grade);