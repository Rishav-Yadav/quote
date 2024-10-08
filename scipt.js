function getQuote() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.allorigins.win/get?url=" +
      encodeURIComponent("https://animechan.io/api/v1/quotes/random")
  );
  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      const contentsJSON = JSON.parse(this.responseText);
      const dataObj = JSON.parse(contentsJSON.contents);
      const quote = dataObj.data.content;
      const anime = dataObj.data.anime.name;
      const char = dataObj.data.character.name;
      const heading = document.createElement("h2");
      heading.appendChild(document.createTextNode(`"${quote}"`));
      const div = document.querySelector("div");
      div.innerHTML = "";
      const strong = document.createElement("strong");
      const by = document.createTextNode(`~${char}(${anime})`);
      strong.appendChild(by);
      strong.style.color = "yellow";
      strong.style.textAlign = "right";

      div.appendChild(heading);
      div.appendChild(strong);
      // console.log(
      //   dataObj.data,
      //   "lalalalal",
      //   dataObj.data.content,
      //   dataObj.data.anime.name,
      //   dataObj.data.character.name
      // );
    }
  };
  xhr.send();
}

document.querySelector("button").addEventListener("click", getQuote);
