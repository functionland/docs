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
      type: 'doc',
      label: 'Welcome',
      id: 'welcome',
    },
    {
      type: 'category',
      label: 'Fula API',
      link: {
        type: 'doc',
        id:'api-intro',
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
          ]
        },
        {
          type:'category',
          label:'Reference',
          link: {
            type: 'doc',
            id:'reference-api',
          },
          items:[
              'api/client-instance',
            'api/graph-api',
            'api/file-api'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        {
          type: 'doc',
          label: 'Fula Network',
          id: 'concepts/fula-network'
        },
        {
          type: 'category',
          label: 'Protocol Suite',
          link: {
            type: 'doc',
            id: 'concepts/protocol-suite'
          },
          items: [
            {
              type: 'doc',
              label: 'File Protocol',
              id: 'concepts/file-protocol'
            },
            {
              type: 'doc',
              label: 'Graph Protocol',
              id: 'concepts/graph-protocol'
            }
          ]
        }
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
        {
          type:'category',
          label:'Security',
          link:  {
            type:'doc',
            id:'RFCs/fula-sec'
          },
          items:[
            'RFCs/fula-sec/did',
            'RFCs/fula-sec/encryption',
          ]
        },
        'RFCs/private-network',
        'RFCs/document-syncing',
        'RFCs/personal-data-reserve'
      ]
    }
  ],
};

module.exports = sidebars;
