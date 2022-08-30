// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const backgroundcolor = ((localStorage.getItem("backgroundcolor")) ? (localStorage.getItem("backgroundcolor")) : `charcole`)



const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  document.body.style.background = backgroundcolor;
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [{
        transform: "translate(0, 0)"
      },
      {
        transform: `translate(${to.x}rem, ${to.y}rem)`
      }
    ], {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});





const form = document.querySelector('form');
const input = document.querySelector('input');


form.addEventListener('submit', async event => {
  event.preventDefault();
  window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  });
});

function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};

(function () {

  if (window.location.hostname == "fast.fcboe.cf") {
    alert(`Hello! I regret to have to tell you guys but i will be changing the domain for hopefully the last time! The new domain will be set to https://www.fcboe.cf Please note this change will wipe your data and I regret having to do this!`);
  }
  if (window.localStorage) {
    if (!localStorage.getItem('firstLoad')) {
      const form = document.querySelector('form');
      const input = document.querySelector('input');
      alert("Welcome, since this is your first time please give me a minute to load the assets!")


      window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix

      }).then(() => {
        let url = "https://google.com"
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url =
          'http://' + url;


        alert("the site is working")
      });

      function isUrl(val = '') {
        if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ')
          return true;
        return false;
      };

      localStorage['firstLoad'] = true;
      window.location.reload();
    } else if (!localStorage.getItem('alerted')) {
      alert("Website loaded! Please reload the page in order to use the proxy!")
      localStorage['alerted'] = true;
    };
  };
})();


function show_prompt() {
  var color = prompt('Please enter a hex code or color', '#3f4d63');
  if (color != null && color != "") {
    alert(color);
    if (window.localStorage) {
      if (!localStorage.getItem('backgroundcolor')) {
        localStorage['backgroundcolor'] = color;
        window.location.reload();
      } else { 
        localStorage.setItem("backgroundcolor", color);
        window.location.reload();
      }
    }
  }
}

function show_color() {
  alert(localStorage.getItem("backgroundcolor"))
}