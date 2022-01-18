export class Nasa {
    constructor(data) {
        this.date = data.date
        this.info = data.explanation
        this.title = data.title
        this.img = data.url
    }
}