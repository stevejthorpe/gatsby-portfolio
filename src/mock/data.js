import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Steve Thorpe | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Steve Thorpe',
  subtitle: 'The unknown developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a full-stack web developer building on a successful career in qualitative and quantitative social research. Specialising in forced migration and human rights, I have worked across North Africa for various UN agencies and NGOs including UNHCR, OHCHR, IOM, Save the Children and the Danish Refugee Council. ',
  paragraphTwo:
    'My work developing a migration data platform for the UN led me to explore web development as a tool for communicating complex ideas to a range of audiences. I am now drawing together my broad skill-set in order to make beautiful tools for data driven story-telling.',
  paragraphThree:
    'My tech stack includes: Javascript, Node.js, Express, React, Vue.js, PostgreSQL, Redux, Handlebars, socket.io, jQuery, HTML/CSS and AWS, Heroku and Git.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'dash-Jobs',
    info:
      'dash-Jobs is a user centered job search tool and dashbord. Users can compose cover letters, track application progress and drill down into each application profile using an interactive Sankey graph. Each application profile includes data such as average salary from APIs such as Glassdoor.',
    info2:
      'Stack: Javascript, d3.js, Express, React, React-Redux, React-Router, React-Hooks, Node.js, PostgreSQL, Jest',
    url: 'https://dash-jobs.herokuapp.com',
    repo: 'https://github.com/stevejthorpe/dash-jobs', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Ripple Social Network',
    info:
      'A peaceful social network with login/out, user profiles, online users and instant messaging. Users can upload profile images and instant message their friend network.',
    info2:
      'Stack: Javascript, Express, React, React-Redux, React-Router, React-Hooks, Node.js, PostgreSQL, Jest',
    url: 'https://ripple-social-network.herokuapp.com',
    repo: 'https://github.com/stevejthorpe/ripple-social-network', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Express Petition',
    info:
      'A petition app made in Vue. Users can register an account, login and sign the petition using their trackpad or mouse. Once singed, users can see other signers and filter by location.',
    info2: 'Stack: Javascript, Vue.js, BasicAuth, PostgreSQL',
    url: 'https://sa-petition.herokuapp.com',
    repo: 'https://github.com/stevejthorpe', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'thorpe.steve@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/stevejthorpe',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/St3v3JT',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/steve-j-thorpe/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/stevejthorpe',
    },
  ],
};

// Github start/fork buttons
// export const githubButtons = {
//   isEnabled: false, // set to false to disable the GitHub stars/fork buttons
// };
