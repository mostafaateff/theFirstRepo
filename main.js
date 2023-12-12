

var quote = document.getElementById('quote')

var quote1 = `<p>“ Be yourself; everyone else is already taken. ”</p>
                    <p>― Oscar Wilde</p>
                    `
var quote2 = `<p>“ Be the change that you wish to see in the world. ”</p>
                    <p>― Mahatma Gandhi</p>
                    `
var quote3 = `<p>“ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ”</p>
                    <p>― Albert Einstein</p>
                    `
var quote4 = `<p>“ So many books, so little time. ”</p>
                    <p>― Frank Zappan</p>
                    `
var quote5 = `<p>“ A room without books is like a body without a soul. ”</p>
                    <p>― Marcus Tullius Cicero</p>
                    `
var quote6 = `<p>“ You only live once, but if you do it right, once is enough. ”</p>
                    <p>― Mae West</p>`

var arr = [
    quote1, quote2, quote3, quote4, quote5, quote6,
]
var lastNum
function RandomArr() {
    var num = Math.floor(Math.random() * 6)
    if (num == lastNum) {
        num = num - 1
    }
    lastNum = num
    quote.innerHTML = arr[num]
}

