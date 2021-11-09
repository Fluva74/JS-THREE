const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    axios.get("http://lebowski.me/api/quotes/random").then((res) => {
        const name = res.data.quote.lines[0].character.name;
        const quote = res.data.quote.lines[0].text;
        const h1 = document.querySelector("h1");
        const h2 = document.querySelector("h2");

        h1.textContent = quote;
        h2.textContent = `-${name}`;
        // console.log(name);
        // console.log(quote);
    });
});
