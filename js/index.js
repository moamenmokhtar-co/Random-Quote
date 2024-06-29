


// var array = ["mo", "ali", "hany", "abdullah"]


// function ra() {



//     for (var i = 0; i < array.length; i++) {
//         var cartona = "";
//         var random = array[Math.trunc(Math.random() * array.length)];

//         cartona+=`<p class="fs-2">${random}</p>`

//         document.getElementById("output").innerHTML = cartona;

//     }
// }



// 2

// var array = [
//     {
//         quote: "ahlan",
//         author: "mo"
//     },
//     {
//         quote: "mar7ab",
//         author: "mazen"
//     },
//     {
//         quote: "hala",
//         author: "mohannad"
//     }
// ]

// function ra() {

//     var cartona = "";

//     var random = array[Math.trunc(Math.random() * array.length)];

//     var randomQuote = random.quote;
//     var randomAuthor = random.author;

//     cartona += `
//         <p class="fs-2">${randomQuote}</p>
//         <p class="fs-4">${randomAuthor}</p>`



//     document.getElementById("output").innerHTML = cartona;
// }





// 3


// var array = [
//     {
//         quote: "ahlan",
//         author: "mo"
//     },
//     {
//         quote: "mar7ab",
//         author: "mazen"
//     },
//     {
//         quote: "hala",
//         author: "mohannad"
//     }
// ]


// var usedRandom = [];

// function ra() {

//     var cartona = "";

//     var random = array[Math.trunc(Math.random() * array.length)];



//     if(! usedRandom.includes(random) ){
//         usedRandom.push(random);
//     }

//     else {
//         alert("There is no quotes again")
//     }


//     var randomQuote = random.quote;
//     var randomAuthor = random.author;

//     cartona += `
//         <p class="fs-2">${randomQuote}</p>
//         <p class="fs-4">${randomAuthor}</p>`



//     document.getElementById("output").innerHTML = cartona;
// }




// 4



var array = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: " Oscar Wilde"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch"
    },
    {
        quote: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        author: "William W. Purkey"
    },
]


var usedRandom = [
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
];

function getRandom() {

    var cartona = "";


    if (usedRandom.length == array.length) {
        alert("مفيش تاني بطلناها الشغلانة دي");
        usedRandom = [];
        return;
    }


    // shuffling Like Backgammon dice
    do {
        var random = array[Math.trunc(Math.random() * array.length)];
    } while (usedRandom.includes(random));

    usedRandom.push(random);

    var randomQuote = random.quote;
    var randomAuthor = random.author;

    cartona += `
        <p class="fs-2">"${randomQuote}"</p>
        <p class="fs-4">--${randomAuthor}</p>`



    document.getElementById("output").innerHTML = cartona;
}
