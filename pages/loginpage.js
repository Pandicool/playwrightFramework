class loginPage {
    constructor(page){
        this.page = page;
        this.username = '#loginusername';
        this.password = '#loginpassword';
        this.loginbutton = '#login2';
        this.login = '//*[@type="button" and contains(text(),"Log in")]'
        this.close= '(//*[@class ="close"])[3]'
    }

    async loginTodemoBlaze(username, password){
        await this.page.click(this.loginbutton);
        await this.page.fill(this.username,username);
        await this.page.fill(this.password, password)
        await this.page.click(this.login);
    }

    async closeDemoBlazeLogin(){
        await this.page.click(this.close);
    }

}

module.exports = {loginPage}