window.addEventListener('scroll', function() {
    const winScroll = this.document.body.scrollTop || this.document.documentElement.scrollTop;

    const height = this.document.documentElement.scrollHeight - this.document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    let totalScroll = this.document.documentElement.scrollHeight;
    let totalScrolled = this.document.documentElement.clientHeight + this.document.documentElement.scrollTop;
    if(totalScroll - totalScrolled < 100) console.log('Call any function you want');

    console.log(this.document.body.scrollTop, this.document.documentElement.scrollTop,
        this.document.documentElement.scrollHeight, this.document.documentElement.clientHeight);
});