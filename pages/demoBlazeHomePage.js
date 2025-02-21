class demoBlazeHomePage {
    constructor(page) {
        this.page = page;
        this.logout = '#logout2';
    }
    async logoutDemoBlaze() {
        await this.page.click(this.logout);
    }
}

module.exports = { demoBlazeHomePage }