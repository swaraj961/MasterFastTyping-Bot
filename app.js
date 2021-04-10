const puppeteer = require("puppeteer");

(async()=>{

   try {

    const brower = await puppeteer.launch({ 
        headless: false ,
        slowMoln: 25,
        defaultViewport: false});

    const page = await brower.newPage();
    await page.goto("https://typing-speed-test.aoeu.eu/");
    await page.waitForSelector(".nextword");
    
    const words =  await page.evaluate(()=>{
        let wordlist=[document.querySelector(".currentword").innerText];
        const eachword = document.querySelectorAll(".nextword")

        eachword.forEach((word)=>{
            wordlist.push(word.innerText);
        });

        return wordlist;
    });
  

    await console.log(words);

       
   } catch (error) {

    console.log(error);
       
   }

})();
