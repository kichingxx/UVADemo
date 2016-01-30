class SimpleApi {
    constructor() {
        this.colors = ['purple', 'green', 'orange', 'blue', 'red', 'black', 'green'];
        this.i = 0;

    }

    goToNext() {
        return this.colors[this.i++ % this.colors.length];
    }

    onReject(data) {
        console.log('rejected ' + data);
    }

    onAccept(data) {
        console.log('accepted ' + data);
    }
}

export default SimpleApi;