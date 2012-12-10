var libraries = [
  /*
   * Legacy JS
   */
  'lib/parse.js',
  'src/lib/quo.debug.js',
  
  /*
   * Lungo JS
   */
  'src/Lungo.js',
  'src/Lungo.Init.js',
  'src/Lungo.Core.js',
  'src/Lungo.Dom.js',
  'src/Lungo.Service.js',
  'src/Lungo.Constants.js',
  'src/Lungo.Events.js',
  'src/Lungo.Notification.js',
  'src/Lungo.Fallback.js',
  'src/router/Lungo.Router.js',
  'src/router/Lungo.Router.History.js',
  'src/view/Lungo.View.Article.js',
  'src/view/Lungo.View.Aside.js',
  'src/element/Lungo.Element.Cache.js',
  'src/element/Lungo.Element.Carousel.js',
  'src/element/Lungo.Element.Count.js',
  'src/element/Lungo.Element.Loading.js',
  'src/element/Lungo.Element.Progress.js',
  'src/element/Lungo.Element.Pull.js',
  'src/data/Lungo.Data.Cache.js',
  'src/data/Lungo.Data.Sql.js',
  'src/data/Lungo.Data.Storage.js',
  'src/attributes/Lungo.Attributes.Data.js',
  'src/boot/Lungo.Boot.Resources.js',
  'src/boot/Lungo.Boot.Stats.js',
  'src/boot/Lungo.Boot.Layout.js',
  'src/boot/Lungo.Boot.Events.js',
  'src/boot/Lungo.Boot.Data.js',
  'src/boot/Lungo.Boot.Section.js',
  'src/boot/Lungo.Boot.Article.js', 

  /*
   * Lungo CSS
   */
  'src/stylesheets/css/Lungo.base.css',
  'src/stylesheets/css/Lungo.layout.css',
  'src/stylesheets/css/Lungo.layout.nav.css',
  'src/stylesheets/css/Lungo.layout.aside.css',
  'src/stylesheets/css/Lungo.layout.article.css',
  'src/stylesheets/css/Lungo.layout.list.css',
  'src/stylesheets/css/Lungo.layout.grid.css',
  'src/stylesheets/css/Lungo.widgets.css',
  'src/stylesheets/css/Lungo.widgets.splash.css',
  'src/stylesheets/css/Lungo.widgets.button.css',
  'src/stylesheets/css/Lungo.widgets.form.css',
  'src/stylesheets/css/Lungo.widgets.icon.css',
  'src/stylesheets/css/Lungo.widgets.icon.brand.css',
  'src/stylesheets/css/Lungo.widgets.loading.css',
  'src/stylesheets/css/Lungo.widgets.notification.css',
  'src/stylesheets/css/Lungo.widgets.pull.css',
  'src/stylesheets/css/Lungo.theme.default.css',

  /*
   * App JS
   */
  'lib/coffeeinc.js',
  'lib/app.js',
  
  /*
   * App CSS
   */ 
  'lib/extra.css'
];

libraries.forEach(function(url) {
  var item;
  
  if(/js/.test(url)) {
    item = document.createElement('script');
    item.setAttribute('type', 'text/javascript');
    item.setAttribute('src', url);
  } else {
    item = document.createElement('link');
    item.setAttribute('rel', 'stylesheet');
    item.setAttribute('href', url);
  }
  
  document[/js/.test(url) ? 'body' : 'head'].appendChild(item);
});
