const { Post } = require('../models');

const postdata = [
  {
    title: 'Style it Up.',
    post_content: "CSS is the make-up of the HTML. How to make your website stand out.",
    user_id: 10
  },
  {
    title: 'HTML 101.',
    post_content: 'Basic HTML to get your project started',
    user_id: 8
  },
  {
    title: 'Cup of Java.',
    post_content: 'JavaScript made simple. As Easy as drinking coffee.',
    user_id: 1
  },
  {
    title: 'Python.',
    post_content: 'The most novel programming language out there. Get started here',
    user_id: 4
  },
  {
    title: 'Youtube and You.',
    post_content: 'Your content could potentially make you a lot of money. Do not miss out',
    user_id: 7
  },
  {
    title: 'I can ride my site with no Handlebars.',
    post_content: 'If you are not fond of handlebars here are some alternative options to handle your site.',
    user_id: 4
  },
  {
    title: 'Protect your password.',
    post_content: 'Hackers are constantly trying to get your information. Here are some useful tips to protect your password',
    user_id: 1
  },
  {
    title: 'GitHub Repo Names.',
    post_content: 'If you cannot think of a creative name for your Repo here are some suggestions for you.',
    user_id: 1
  },
  {
    title: 'MCV done EZ.',
    post_content: 'Easy guide to get started with MVC',
    user_id: 9
  },
  {
    title: 'README GEN.',
    post_content: 'Easy README.md generator',
    user_id: 5
  },
  {
    title: 'Be your own HEROku.',
    post_content: 'Learn how to deploy your site using Heroku',
    user_id: 3
  },
  {
    title: 'JQueries vs JavaScript.',
    post_content: 'Pros and cons of using either one of these options for your site',
    user_id: 10
  },
  {
    title: 'Strap your Boots.',
    post_content: 'Bootstrap demystified',
    user_id: 8
  },
  {
    title: 'Bulma 101',
    post_content: 'Easily style your website with Bulma',
    user_id: 3
  },
  {
    title: 'Apple Music vs Spotify',
    post_content: 'Music streaming powerhouses, which one gives you a better bang for your buck',
    user_id: 3
  },
  {
    title: 'Netflix: A Streaming story',
    post_content: 'The History behind this revolutionary company',
    user_id: 7
  },
  {
    title: 'Instagram for Dummies.',
    post_content: 'Best introductory guide for Instagram',
    user_id: 6
  },
  {
    title: 'Apple vs Android.',
    post_content: 'Hands down Apple is the clear winner',
    user_id: 4
  },
  {
    title: 'Wireless Earbuds war.',
    post_content: 'Which option should you go with?',
    user_id: 6
  },
  {
    title: 'Console Wars.',
    post_content: 'Which console do you prefer? Switch. PS5. Xbox Series S. Graphics vs Exclusive titles.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;