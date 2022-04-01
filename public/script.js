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
  <p>Delivers a list of images for character creation apps.</p>
  <p>Building a little game? No problem. Creating avatars for the office people? Sure thing.</p>
  <pre>
    <code>
    // Test it on your terminal with:

    fetch('https://character-creation-api.herokuapp.com/equipment/')
      .then((response) => response.json())
      .then(console.log)
    </code>
  </pre>  
  `;
}
