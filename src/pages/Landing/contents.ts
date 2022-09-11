export const LandingContent = {
  name: 'Wai Loon,Ho',
  role: 'Software Engineer',
  backgroundImgSrc: require('./assets/landingBackground.jpg'),
  primaryButton: {
    name: 'About Me',
    route: 'about-me',
  },
  tonalButton: [
    {
      name: 'Contact Me',
      route: 'contact-me',
      style: {
        minWidth: 150,
        marginBottom: 16,
      },
    },
    {
      name: 'Work Experiences',
      route: 'work-expereinces',
      style: {
        minWidth: 180,
      },
    },
  ],
};
