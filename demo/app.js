// app.js

var menu = [
  {
    name:'game',
    title:'Game',
    children:[
      {
        name:'game2',
        title:'Game 2',
        children:false,
        url:'#'
      },
      {
        name:'game3',
        title:'Game 3',
        children:false,
        url:'#'
      },
      {
        name:'game4',
        title:'Game 4',
        children:false,
        url:'#'
      }
    ],
    url:'#'
  },
  {
    name:'community',
    title:'Community',
    children:false,
    url:'#'
  },
  {
    name:'media',
    title:'Media',
    children:[
      {
        name:'media2',
        title:'Media 2',
        children:false,
        url:'#'
      },
      {
        name:'media3',
        title:'Media 3',
        children:false,
        url:'#'
      },
      {
        name:'media4',
        title:'Media 4',
        children:false,
        url:'#'
      }
    ],
    url:'#'
  },
  {
    name:'forums',
    title:'Forums',
    children:[
      {
        name:'gameplay',
        title:'Gameplay',
        children:[
          {
            name:'gameplay2',
            title:'Gameplay 2',
            children:false,
            url:'#'
          },
          {
            name:'gameplay3',
            title:'Gameplay 3',
            children:false,
            url:'#'
          },
          {
            name:'gameplay4',
            title:'Gameplay 4',
            children:false,
            url:'#'
          }
        ],
        url:'#'
      },
      {
        name:'classes',
        title:'Classes',
        children:[
          {
            name:'barbarian',
            title:'Barbarian',
            children:false,
            url:'#'
          },
          {
            name:'demonhunter',
            title:'Demon Hunter',
            children:false,
            url:'#'
          },
          {
            name:'monk',
            title:'Monk',
            children:false,
            url:'#'
          },
          {
            name:'witchdoctor',
            title:'Witch Doctor',
            children:false,
            url:'#'
          },
          {
            name:'wizrd',
            title:'Wizard',
            children:false,
            url:'#'
          }
        ],
        url:'#'
      },
      {
        name:'beta',
        title:'Beta',
        children:[
          {
            name:'beta2',
            title:'Beta 2',
            children:false,
            url:'#'
          },
          {
            name:'beta3',
            title:'Beta 3',
            children:false,
            url:'#'
          },
          {
            name:'beta4',
            title:'Beta 4',
            children:false,
            url:'#'
          }
        ],
        url:'#'
      },
      {
        name:'support',
        title:'Support',
        children:[
          {
            name:'support2',
            title:'Support 2',
            children:false,
            url:'#'
          },
          {
            name:'support3',
            title:'Support 3',
            children:false,
            url:'#'
          },
          {
            name:'support4',
            title:'Support 4',
            children:false,
            url:'#'
          }
        ],
        url:'#'
      }
    ],
    url:'#'
  },
  {
    name:'services',
    title:'Services',
    children:[
      {
        name:'services2',
        title:'Services 2',
        children:false,
        url:'#'
      },
      {
        name:'services3',
        title:'Services 3',
        children:false,
        url:'#'
      },
      {
        name:'services4',
        title:'Services 4',
        children:false,
        url:'#'
      }
    ],
    url:'#'
  }
];

menuBuilder.addMenu(menu, 'main');
menuBuilder.createMenu(menuBuilder.getElement('[data-menu]'), 'main');
