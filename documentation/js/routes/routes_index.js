var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","loadChildren":"./home/home.module#HomePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/home-routing.module.ts","module":"HomePageRoutingModule","children":[{"path":"","component":"HomePage"}],"kind":"module"}],"module":"HomePageModule"}]},{"path":"message/:id","loadChildren":"./view-message/view-message.module#ViewMessagePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/view-message/view-message-routing.module.ts","module":"ViewMessagePageRoutingModule","children":[{"path":"","component":"ViewMessagePage"}],"kind":"module"}],"module":"ViewMessagePageModule"}]},{"path":"","redirectTo":"home","pathMatch":"full"}],"kind":"module"}]}
