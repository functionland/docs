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
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'index',
      },
      items: [
        'introduction/fula',
        'introduction/bas',
        'introduction/blox',
        {
          type: 'category',
          label: 'How to Contribute',
          link: {
            type: 'doc',
            id: 'introduction/contribute/contribute',
          },
          items: [
            'introduction/contribute/styling',
            'introduction/contribute/writing',
            'introduction/contribute/contribution-tutorial',
          ]
        }
      ]
    },
    'getting-started-testnet',
    {
      type: 'category',
      label: 'Mainnet Transition',
      link: {
        type: 'doc',
        id: 'functionyard/mainnet-transition/index',
      },
      items: [
        'functionyard/mainnet-transition/existing-testnet',
        'functionyard/mainnet-transition/new-installation',
        'functionyard/mainnet-transition/android-connected',
        'functionyard/mainnet-transition/android-disconnected',
        'functionyard/mainnet-transition/ios',
      ]
    },
    {
      type: 'category',
      label: 'Hardware',
      link: {
        type: 'doc',
        id:'functionyard/hardware/fxblox-hardware',
      },
      items: [
        'functionyard/hardware/fxblox-hardware-rpi',
        'functionyard/hardware/fxblox-hardware-rk1',
        'functionyard/hardware/fxblox-hardware-rpi-reimage',
        'functionyard/hardware/fxblox-hardware-rk1-reimage',
      ]
    },
    'functionyard/add-storage',
    'functionyard/fxblox-app',
    'functionyard/support',
    {
      type: 'category',
      label: 'Functionyard Testnet',
      link: {
        type:'doc',
        id:'functionyard/index',
      },
      items:[
        'functionyard/join',
        'functionyard/metamask',
        'functionyard/dapps',
        'functionyard/fxfotos',
        'functionyard/join-windows',
      ]
    },
    {
      type: 'category',
      label: 'Pinning Service API',
      link: {
        type:'doc',
        id:'pinning-service/index'
      },
      items:[
        'pinning-service/ipfs-pinning-service-api',
      ]
    },
    {
      type: 'link',
      label: 'Fula API',
      href: 'https://docs.fx.land/fula-api',
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
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'doc',
        id: 'functionyard/troubleshooting/index',
      },
      items: [
        'functionyard/troubleshooting/manual-claim-rewards',
        'functionyard/troubleshooting/disconnected-blox',
        'functionyard/troubleshooting/switch-chain',
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
