(function notes(){
  `
Create a posts array, adding the existing post to it.
Add a second post with no tags property.
Modify your template to check for the existence of tags, and if none exist, output a "Not tagged" message.
Wrap the template in an each loop to output each post.
  `
});

let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut <strong>perspiciatis</strong> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: ['catfluencer', 'muffin', 'warrior'],
};


document.addEventListener('DOMContentLoaded', (event) =>{
  let postEl = document.querySelector('#post');
  let postTemplate = Handlebars.compile(postEl.innerHTML);

  let html = postTemplate(post);
  let articles = document.getElementById('articles');

  articles.innerHTML = html

  Handlebars.registerPartial('myPartial', '{{prefix}}');

  // const parser = new DOMParser();

  // parser.parseFromString(html, 'text/html');

  // document.body.append(parser.parseFromString(html, 'text/html'))

  // console.log(parser.parseFromString(html, 'text/html'))
})