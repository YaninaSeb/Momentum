let quoteText = document.querySelector('.quote');
let quoteAuthor= document.querySelector('.author');

let currentText;
let currentAuthor; 
let keyQuote = "en";




async function getQuotes() {  
      if (keyQuote == "en") {  
            const quotes = 'quotes/quotes_en.json'
            const res = await fetch(quotes);
            const data = await res.json(); 

            let randomNum = Math.floor(Math.random() * 51 + 1);
            quoteText.textContent = data[randomNum].text;
            quoteAuthor.textContent=data[randomNum].author;
      }
      else if (keyQuote == "ru") { 
            const quotes = '/quotes/quotes.json'
            const res = await fetch(quotes);
            const data = await res.json(); 

            let randomNum = Math.floor(Math.random() * 51 + 1);
            quoteText.textContent = data[randomNum].text;
            quoteAuthor.textContent=data[randomNum].author;
      }
            
  }

  getQuotes();

  

        /*смена цитат нажатием */

  let quoteButton= document.querySelector('.change-quote');

  quoteButton.addEventListener('click', getQuotes);




                      /*события для перевода на другой язык */

  const quotesEnglish = document.querySelector('.language-english'); // input

  quotesEnglish.addEventListener('change', () => {
      if(quotesEnglish.checked) {
         keyQuote = 'en';
         getQuotes()
      } 
  });
  
  
  const quotesRussian = document.querySelector('.language-russian'); // input
  
  quotesRussian.addEventListener('change', () => {
      if(quotesRussian.checked) {
         keyQuote = 'ru';
          getQuotes()
      } 
  });
 



