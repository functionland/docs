/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      link: {
        type: 'doc',
        id:'welcome',
      },
      items: [
        {
          type:'doc',
          label:'Getting Started',
          id:'getting-started',
        },
        {
          type:'category',
          label:'BOX Reference Api',
          link: {
            type: 'doc',
            id:'api',
          },
          items:[
            'api/data-api',
            'api/file-api'
          ]
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
              'tutorials/todo-tutorial'
          ]
        },
        {
          type: 'doc',
          label: 'DIY Setup',
          id: 'diy-setup',
        },
      ]
    },
    {
      type: 'doc',
      label: 'Whitepaper',
      id: 'whitepaper/whitepaper',
    },
  ],
};

module.exports = sidebars;
