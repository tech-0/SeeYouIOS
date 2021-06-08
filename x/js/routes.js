routes = [
  {
    path: '/',
    url: '/store/',
  },
  {
    path: '/:id/',
    url: '/section/{{id}}',
  },
  {
    path: '/vip',
    url: '/vip',
  },
  {
    path: '/appdown/:id',
    url: '/appdown/{{id}}',
  },
  {
    path: '/appdownvip/:id',
    url: '/appdownvip/{{id}}',
  },
  {
    path: '/theming',
    componentUrl: '/x/pages/theme.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
