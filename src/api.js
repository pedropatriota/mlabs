const ul = document.querySelector(".social ul");

const socialMedia = (list, loginId) => {
  let array = [];
  list.forEach(el => {
    const { name, url, picture, channel_key } = el;
    if (channel_key == loginId) {
      array.push({
        picture,
        name,
        url
      });
    }
  });

  return array;
};

function test() {
  var checkedRadioBtnList = [];
  var account = document.getElementsByName("sm");

  for (i = 0; i < account.length; i++) {
    checkedRadioBtnList.push({ value: account[i].value });
    if (account[i].checked) {
      checkedRadioBtnList[i].value = "sel";
    }
  }
  return checkedRadioBtnList;
}

const createEl = list => {
  let li = document.createElement("li");

  let img = document.createElement("img");
  img.setAttribute("src", list.picture);

  let strong = document.createElement("strong");
  strong.appendChild(document.createTextNode(list.name));

  let url = document.createElement("a");
  url.setAttribute("href", list.url);
  url.setAttribute("target", "_blank");
  url.appendChild(document.createTextNode(list.url));

  let input_radio = document.createElement("input");
  input_radio.setAttribute("type", "radio");
  input_radio.setAttribute("name", "sm");
  input_radio.setAttribute("value", "ok");

  let div = document.createElement("div");
  div.appendChild(strong);
  div.appendChild(url);

  li.appendChild(img);
  li.appendChild(div);
  li.appendChild(input_radio);
  return li;
};

const appendToDOM = list => {
  ul.innerHTML = "";
  list.map(list => {
    ul.appendChild(createEl(list));
  });
};

const formEl = document.getElementById("social_form");
formEl.onsubmit = e => {
  e.preventDefault();

  let val = test();
  let login = document.querySelectorAll(".login");
  let media = socialMedia(val, i);

  for (let i = 0; i < val.length; i++) {
    if (val[i].value == "sel") {
      //let selMedia = document.querySelector(`.socialMedias div:nth-child(${i})`);
      let selAccount = i + 1;
      console.log(`A opção selecionada foi: ${selAccount}`);
      let nameEl = document.querySelector(
        `form .social ul li:nth-child(${selAccount}) div strong`
      );
      let nameText = nameEl.textContent || nameEl.innerText;
      console.log(nameText);

      let change = document.querySelector(
        `main .socialMedias div:nth-child(${selAccount}) h3`
      );
    }
  }
};

const api = () => {
  axios
    .get("https://demo2697181.mockable.io/pages")
    .then(response => {
      const list = response.data.data;

      login.forEach(function(login) {
        login.addEventListener("click", function() {
          loginId = this.getAttribute("id");

          appendToDOM(socialMedia(list, loginId));
        });
      });
    })

    .catch(error => console.error(error));
};

api();
