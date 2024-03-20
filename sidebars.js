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
      type:'category',
      label:'Functionyard Testnet',
      link: {
        type:'doc',
        id:'release/functionyard/index',
      },
      items:[
        'release/functionyard/fxblox-hardware',
        'release/functionyard/fxblox-app',
        'release/functionyard/join',
        'release/functionyard/metamask',
        'release/functionyard/dapps',
      ]
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
    },
    {
      type: 'category',
      label: 'Blockchain',
      link: {
        type:'doc',
        id:'blockchain/blockchain-intro'
      },
      items:[
        {
          type:'category',
          label:'Services',
          link:  {
            type:'doc',
            id:'blockchain/services'
          },
          items:[
            'blockchain/Services/Explorer',
            'blockchain/Services/Node',
            'blockchain/Services/BuildNode',
            'blockchain/Services/RunNode',
            'blockchain/Services/NodeAPI',
            'blockchain/Services/ProofEngine',
            'blockchain/Services/Status',
            'blockchain/Services/FulaContractAPI',
          ]
        },
        {
          type:'category',
          label:'Recipes',
          link:  {
            type:'doc',
            id:'blockchain/recipes'
          },
          items:[
            'blockchain/Recipes/Account',
            'blockchain/Recipes/Asset',
            'blockchain/Recipes/Bag',
            'blockchain/Recipes/Bundle',
            'blockchain/Recipes/Challenges',
            'blockchain/Recipes/Claims',
            'blockchain/Recipes/Manifest',
            'blockchain/Recipes/Market',
            'blockchain/Recipes/Pool',
          ]
        },
      ]
    },
  ],
  mvpSidebar: [
    {
      type: 'category',
      label: 'MVP',
      link: {
        type:'doc',
        id:'mvp'
      },
      items:[
        {
          type:'category',
          label:'Fotos',
          link: {
            type:'doc',
            id:'mvp/fotos'
          },
          items:[
            {
              type:'doc',
              label:'setup',
              id:'mvp/fotos/setup'
            },
            {
              type:'doc',
              label:'backup',
              id:'mvp/fotos/backup'
            },
            {
              type:'doc',
              label:'sharing',
              id:'mvp/fotos/sharing'
            }


          ]
        },
        {
          type:'category',
          label:'Pools',
          link: {
            type:'doc',
            id:'mvp/pools'
          },
          items:[
            {
              type:'doc',
              label:'provide storage',
              id:'mvp/pools/storage-provide'
            }
          ]
        }
      ]
    },

  ],
};

module.exports = sidebars;
