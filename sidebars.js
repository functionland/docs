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
          type:'category',
          label:'Getting Started',
          link: {
            type:'doc',
            id:'getting-started',
          },
          items:[
            'getting-started/box-setup',
            'getting-started/using-samples',
            'getting-started/fula-client',
          ]
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
      ]
    },
    {
      type: 'doc',
      label: 'Whitepaper',
      id: 'whitepaper/whitepaper',
    },
    {
      type: 'category',
      label: 'RFCs',
      link: {
        type:'doc',
        id:'RFCs/rfc-process'
      },
      items:[
        'RFCs/pnet',
        'RFCs/replication'
      ]
    }
  ],
};

module.exports = sidebars;
