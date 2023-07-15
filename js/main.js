var img = document.getElementById("img")
var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")

var quoateList = [
    { img: ' <img src="imgs/1.jpg" class="imgCustom"  alt="Oscar Wilde">', pCont1: "“Be yourself; everyone else is already taken.”", pCont2: "― Oscar Wilde" },
    { img: ' <img src="imgs/2.jpg" class="imgCustom"  alt="Marilyn Monroe">', pCont1: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", pCont2: "― Marilyn Monroe" },
    { img: ' <img src="imgs/3.jpg" class="imgCustom"  alt="Albert Einstein">', pCont1: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", pCont2: "― Albert Einstein" },
    { img: ' <img src="imgs/4.jpg" class="imgCustom"  alt="Frank Zappa">', pCont1: "“So many books, so little time.”", pCont2: "― Frank Zappa" },
    { img: ' <img src="imgs/5.jpg" class="imgCustom"  alt="Marcus Tullius Cicero">', pCont1: "“A room without books is like a body without a soul.”", pCont2: "― Marcus Tullius Cicero"},
    { img: ' <img src="imgs/6.jpg" class="imgCustom"  alt="Bernard M. Baruch">', pCont1: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", pCont2: "― Bernard M. Baruch"},
    { img: ' <img src="imgs/7.jpg" class="imgCustom"  alt="William W. Purkey">', pCont1: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”", pCont2: "― William W. Purkey"},
    { img: ' <img src="imgs/8.jpg" class="imgCustom"  alt="Dr. Seuss">', pCont1: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", pCont2: "― Dr. Seuss"},
    { img: ' <img src="imgs/9.jpg" class="imgCustom"  alt="Mae West">', pCont1: "“You only live once, but if you do it right, once is enough.”", pCont2: "― Mae West"},
    { img: ' <img src="imgs/10.jpg" class="imgCustom"  alt="Mahatma Gandhi">', pCont1: "“Be the change that you wish to see in the world.”", pCont2: "― Mahatma Gandhi"},

]

var temp = Math.floor(Math.random() * 10)
console.log(temp);

function showQuoate() {
    var random = Math.floor(Math.random() * 10)
    if (random == temp) {
        var random = Math.floor(Math.random() * 10)
    }
    temp = random
    console.log(temp);
    img.innerHTML = quoateList[random].img;
    p1.innerHTML = quoateList[random].pCont1;
    p2.innerHTML = quoateList[random].pCont2;

}
