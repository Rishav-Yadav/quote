const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://thingproxy.freeboard.io/fetch/https://animechan.io/api/v1/quotes/random"
);
xhr.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    const data = JSON.parse(this.responseText);
    const quote = data[1].content;
    const anime = data[1].anime.name;
    const char = data[2].character.name;
    const heading = document.createElement("h2");
    heading.appendChild(document.createTextNode(quote));
    const div = document.querySelector("div");
    div.appendChild(heading);
    const by = document.createTextNode(`~${char}(${anime})`);
    by.style.textAlign = "right";
    div.appendChild(by);
  }
};
xhr.send();
