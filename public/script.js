const container = document.querySelector('.oncoming-data');
const infoSection = document.querySelector('.info-section');

function apiCall(param) {
  container.innerHTML = '';
  infoSection.innerHTML = '';
  fetch(
    `https://character-creation-api.herokuapp.com/${param
      .toLowerCase()
      .replace(/\s/g, '')}/`
  )
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const divItem = document.createElement('div');
        const img = document.createElement('img');
        const text = document.createElement('text-area');

        divItem.classList.add('div-item');
        img.classList.add('img-item');
        text.classList.add('text-item');

        img.src = data[i].img_url;
        text.innerText = `{ 
        ${JSON.stringify(data[i], null, null)
          .replace('{', '')
          .replace('}', '')
          .replaceAll(',', ',\n')
          .replaceAll(':', ': ')}
        }
        `;

        divItem.appendChild(img);
        divItem.appendChild(text);
        container.appendChild(divItem);
      }
    });
}

function inicio() {
  container.innerHTML = '';
  infoSection.innerHTML = `
  <p>Delivers a list of images for character creation apps. Building a little game? No problem. <br>Creating avatars for the office people? Sure thing.</p>

  <span>Test it on your terminal using fetch:</span>
  <pre>
    <code>
    <span class="function">fetch</span>(<span class="string">'https://character-creation-api.herokuapp.com/equipment/'</span>)
      .<span class="function">then</span>(<span class="param">response</span> => <span class="param">response</span>.<span class="function">json</span>())
      .<span class="function">then</span>(<span class="param">console</span>.<span class="function">log</span>)
    </code>
  </pre>
  <span>Or with libraries such as <a href="https://axios-http.com/docs/intro">axios</a>:</span>
  <pre>
    <code>
    <span class="param">axios</span>.<span class="function">get</span>(<span class="string">'https://character-creation-api.herokuapp.com/equipment/'</span>)
      .<span class="function">then</span>(<span class="function">function</span> (<span class="param">response</span>) {
        <span class="param">console</span>.<span class="function">log</span>(<span class="param">response</span>.<span class="param">.data</span>);
      })
    </code>
  </pre>

  <h2 >Endpoint guide</h2>
  <span>Enpoints are disposed in the folllowing manner:</span><br>
  <p style="font-size: 18px; margin: 14px 6px 6px 0;"><i>https://character-creation-api.herokuapp.com/<strong>parameter</strong></p></i>
  <p style=" margin: 14px 6px 6px 0;">which means:</p>
  <ul>
    <li>https://character-creation-api.herokuapp.com/<strong>beard</strong><br>will return you a json with all the beards</li>
    <li style="margin-top: 20px;">https://character-creation-api.herokuapp.com/<strong>dress</strong><br>will return you a json with all the dresses</li>
  </ul>
  <p style=" margin: 14px 6px 6px 0;">and so forth. A typo passed as a parameter will cause the response to break.</p>
  

  <h2 id="useful-h2">Useful information</h2>
  <p>Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!<br>Viva Forevis aptent taciti sociosqu ad litora torquent.Casamentiss faiz malandris se pirulitá.Leite de capivaris, <br>leite de mula manquis sem cabeça.</p>
  
  
  <h2 id="useful-h2">Useful information</h2>
  <p>Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!<br>Viva Forevis aptent taciti sociosqu ad litora torquent.Casamentiss faiz malandris se pirulitá.Leite de capivaris, <br>leite de mula manquis sem cabeça.</p>
  `;
}
