var rootConfig = {
  };
  //localhost和ip的简单正则匹配
  if (location.host.indexOf('localhost') === 0 || /^\d{1,3}\.[^]*/.test(location.host)) {
      rootConfig = {
        rootUrl: '//' + location.host + '/iprp_middleground',//ajax根路径
        indexUrl: '//' + location.host + '/ipp',
        cartUrl: '//' + location.host + '/portalsite-cnsebe',
        czUrl:'//' + location.host + '/cz',
        userUrl: '//' + location.host + '/iprp_portal',
        wxUrl:'//' + location.host,
        spUrl:'//' + location.host + '/sp',
        toolsUrl: '//' + location.host + '/tools',
        adminUrl: '//' + location.host + '/iprp_operator',//后台代理到admin
        homeUrl: '//' + location.host,
      };
  }
  if (location.host.indexOf('test') === 0) {
      rootConfig = {
      };
  }
  if (location.host.indexOf('pre') === 0) {
      rootConfig = {
      };
  }
  export default rootConfig;
  