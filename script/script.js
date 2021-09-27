fetch('../data/data.json')
  .then(response => response.json())
  .then(data => {
    const articles = (data);
    console.log(articles);

    articles.forEach(element => {
      element = (element)
      console.log(element);
      const articleDiv = document.createElement('div');
      articleDiv.className = 'article';
      articleDiv.innerHTML = `<img src="assets/media/${element.id}.jpeg" alt="" srcset=""><div class="details"><p class="number">${element.id}</p><p class="name">${element.name}</p></div>`
      document.getElementById('art').appendChild(articleDiv);
    });
  });
