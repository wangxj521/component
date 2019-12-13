var rootConfig = {
    rootUrl: '//mp.ipsebe.com/iprp_middleground',
    indexUrl: '//mp.ipsebe.com',
    cartUrl: '//cart.ipsebe.com',
    czUrl:'//cz.ipsebe.com',
    userUrl: '//user.ipsebe.com',
    wxUrl:'//wechat.ipsebe.com',
    spUrl: '//sp.ipsebe.com',
    toolsUrl: '//tools.ipsebe.com',
    adminUrl: '//mp.ipsebe.com/iprp_operator',//后台代理到admin
    homeUrl: '//www.ipsebe.com',
    ftpUrl: 'ftp://114.55.58.121',
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
        ftpUrl: 'ftp://59.110.11.116',
      };
  }
  if (location.host.indexOf('test') === 0) {
      rootConfig = {
        rootUrl: '//testmp.ipsebe.com/iprp_middleground',
        indexUrl: '//testmp.ipsebe.com',
        cartUrl: '//testcart.ipsebe.com',
        czUrl:'//testcz.ipsebe.com',
        userUrl: '//testuser.ipsebe.com',
        wxUrl:'//testwechat.ipsebe.com',
        spUrl: '//testsp.ipsebe.com',
        toolsUrl: '//testtools.ipsebe.com',
        adminUrl: '//testmp.ipsebe.com/iprp_operator',//后台代理到admin
        homeUrl: '//testwww.ipsebe.com',
        ftpUrl: 'ftp://59.110.11.116',
      };
  }
  if (location.host.indexOf('pre') === 0) {
      rootConfig = {
        rootUrl: '//premp.ipsebe.com/iprp_middleground',
        indexUrl: '//premp.ipsebe.com',
        cartUrl: '//precart.ipsebe.com',
        czUrl:'//precz.ipsebe.com',
        userUrl: '//preuser.ipsebe.com',
        wxUrl:'//prewechat.ipsebe.com',
        spUrl: '//presp.ipsebe.com',
        toolsUrl: '//pretools.ipsebe.com',
        adminUrl: '//premp.ipsebe.com/iprp_operator',//后台代理到admin
        homeUrl: '//prewww.ipsebe.com',
        ftpUrl: 'ftp://59.110.11.116',
      };
  }
  //意思了手机
  export default rootConfig;
  