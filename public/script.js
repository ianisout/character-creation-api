const container = document.querySelector('.oncoming-data');
const infoSection = document.querySelector('.info-section');
const mainTitle = document.querySelector('.main-title');
const sub = document.createElement('p');
sub.classList.add('sub-text');
sub.innerText =
  'This may take a second to load on the first go. Heroku sleeps our stuff when we use it "freely"... $.$';

function apiCall(param) {
  const paramParagraph = document.createElement('div');
  paramParagraph.innerHTML = `<p>Parameter for API calling: <strong>${param
    .toLowerCase()
    .replace(/\s/g, '')}</strong></p>`;
  container.innerHTML = '';
  infoSection.innerHTML = '';

  infoSection.appendChild(paramParagraph);
  infoSection.appendChild(sub);
  mainTitle.appendChild(sub);
  if (sub && sub.length < 1) mainTitle.appendChild(sub);
  fetch(
    `https://character-creation-api.herokuapp.com/${param
      .toLowerCase()
      .replace(/\s/g, '')}/`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(sub.length);

      for (let i = 0; i < data.length; i++) {
        const divItem = document.createElement('div');
        const img = document.createElement('img');
        const text = document.createElement('p');

        divItem.classList.add('div-item');
        img.classList.add('img-item');
        text.classList.add('text-item');

        img.src = data[i].img_url;
        text.innerText = `${JSON.stringify(data[i], null, null)
          .replace('{', '')
          .replace('}', '')
          .replaceAll(',', ',\n')
          .replaceAll(':', ': ')}
        `;

        divItem.appendChild(img);
        divItem.appendChild(text);
        container.appendChild(divItem);
      }
    });
}

function inicio() {
  container.innerHTML = '';
  sub.remove();
  infoSection.innerHTML = `
    <p class="sub-text">Customizable avatar data</p>
    
    <h2>What's this?</h2>
    <p>An API that delivers data for character creation and customization.
    They are delivered as a JSON with: <br><strong>id</strong>, <strong>type</strong>, <strong>name</strong>,
    <strong>description</strong>, and an <strong>url</strong> of the item's image. All images are in PNG format with the same dimensions so they can be easily overlapped when applied to create/alter an avatar. Examples:</p>
    <div class="example-img">
        <img src="./img/char3.png" alt="Example character">
        <img src="./img/char1.png" alt="Example character">
        <img src="./img/char2.png" alt="Example character">
        <img src="./img/char4.png" alt="Example character">
      </div>

    <h2>But why?</h2>
    <p>Because I needed something like this once and could not find it, so I created one.<br> I liked it enough so I'm sharing it with you. Use it wisely... or don't, I don't care.</p>

    <h2>How:</h2>
    <p>The same way you would consume any API, duh.</p>
    <span>Using fetch:</span>
    <pre>
    <code><span class="function">fetch</span>(<span class="string">'https://character-creation-api.herokuapp.com/equipment/'</span>)
  .<span class="function">then</span>(<span class="param">response</span> => <span class="param">response</span>.<span class="function">json</span>())
  .<span class="function">then</span>(<span class="param">console</span>.<span class="function">log</span>)</code>
  </pre>
  <span>Or with libraries such as <a href="https://axios-http.com/docs/intro" target="_blank">axios</a>:</span>
  <pre>
    <code><span class="param">axios</span>.<span class="function">get</span>(<span class="string">'https://character-creation-api.herokuapp.com/equipment/'</span>)
  .<span class="function">then</span>(<span class="function">function</span> (<span class="param">response</span>) {
  .<span class="param">console</span>.<span class="function">log</span>(<span class="param">response</span>.<span class="param">.data</span>);
})</code>
  </pre>

  <h2 >Endpoint guide</h2>
  <span>Enpoints are disposed in the folllowing manner:</span><br>
  <p style="font-size: 18px; margin: 14px 6px 6px 0;"><i>https://character-creation-api.herokuapp.com/<strong>parameter</strong></p></i>
  <p style=" margin: 14px 6px 6px 0;">which means:</p>
  <ul>
    <li>https://character-creation-api.herokuapp.com/<strong>beard</strong><br>will return you a json with all the beards</li>
    <li style="margin-top: 20px;">https://character-creation-api.herokuapp.com/<strong>dress</strong><br>will return you a json with all the dresses</li>
  </ul>
  <p style=" margin: 14px 6px 6px 0;">and so on. If you made a typo passing a parameter it will not return the expected response. If you want to check it out just go ahead and strap a '/' plus a term on your browser's url and see it for yourself. Existing parameters are listed on the menu on the left.</p>
  

  <h2 id="useful-h2">Useful information</h2>
  <p>- All images are natively 500x500 pixels.<br>- New images and descriptions are added in the given schedule: whenever I'm in the mood.<br>- Suggestions? Pull request them <a href="https://github.com/ianisout/character-creation-api" target="_blank">here</a>.<br><br>That's it, no more info. The API itself is useful enough.</p>
 `;
}

function noLightTheme() {
  alert('Ewwww! Light theme user? Have you no shame? No light theme for you. Please refrain from using them — they strain your eyes (I think)');
}