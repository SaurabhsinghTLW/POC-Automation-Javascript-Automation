class LoginPage {

constructor (page){
   this.page = page;
}

async addCookies()
{
  await this.page.context().addCookies([ { name: 'abc', value: 'xyz', path: '/', domain: 'domain url' }]);
}

async navigateToURL() {
   await this.page.goto("https://google.comk");
}



}
module.exports= {LoginPage};