class signupPage{
    constructor(page){
        this.page = page;
        this.username = '#loginusername';
        this.password = '#loginpassword';
        this.signupbutton = '#login2';
        this.signup = '';

    }
    async signupDemoBlaze(){
        await this.page.click(this.signup);
        
    }
}