//미래의 배우자 프로그래밍
var 성별 = ["남성", "여성"]
var 스타일 = ["청순한", "터프한", "자상한", "무심한", "세심한", "소심한", "대범한"]
var 몸매 = ["뚱뚱함", "날씬함", "통통함", "완전 뚱뚱함", "말랐음", "완전 말랐음"]
var 국적 = ["한국", " 미국", "스리랑카", "우간다", "폼페이"]
var 무작위성별 = 성별[Math.floor(Math.random() * 2)];
var 무작위스타일 = 스타일[Math.floor(Math.random() * 스타일.length)];
var 무작위몸매 = 몸매[Math.floor(Math.random() * 몸매.length)];
var 무작위국적 = 국적[Math.floor(Math.random() * 국적.length)];
var 미래의배우자 = [ 
    "너의 미래 배우자가 어떤 모습인지 알려주지.",
     무작위성별 + "인데", 
     무작위스타일,
     "스타일임.", 
     "그리고 몸매는",
     무작위몸매 + ".",
     "아! 국적은" + 무작위국적 + "!ㅋㅋ"
].join(" ");
console.log(미래의배우자);
var 의성이미래의배우자 = [ 
    "너의 미래 배우자가 어떤 모습인지 알려주지.",
     무작위성별 + "인데", 
     무작위스타일,
     "스타일임.", 
     "그리고 몸매는",
     무작위몸매 + ".",
     "아! 국적은" + 무작위국적 + "!ㅋㅋ"
].join(" ")
console.log(의성이미래의배우자);
var 성준오빠미래배우자 = [
        "너의 미래 배우자가 어떤 모습인지 알려주지.",
         무작위성별 + "인데", 
         무작위스타일,
         "스타일임.", 
         "그리고 몸매는",
         무작위몸매 + ".",
         "아! 국적은" + 무작위국적 + "!ㅋㅋ"
].join(" ")
console.log(성준오빠미래배우자)