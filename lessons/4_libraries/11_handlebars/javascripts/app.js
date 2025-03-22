(function notes(){
  `
  Locate the template by ID and compile it to a template function.
  Render the post to the body element using the function.
  `
});

let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
};

document.addEventListener('DOMContentLoaded', (event) =>{
  let postEl = document.querySelector('#post');
  let postTemplate = Handlebars.compile(postEl.innerHTML);

  let html = postTemplate(post);
  console.log(html)

  let articles = document.getElementById('articles');

  articles.innerHTML = html

  // const parser = new DOMParser();

  // parser.parseFromString(html, 'text/html');

  // document.body.append(parser.parseFromString(html, 'text/html'))

  // console.log(parser.parseFromString(html, 'text/html'))
})