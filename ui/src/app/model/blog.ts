export class Blog {
    public title: string;
    public titleError: boolean;

    constructor() {
        this.title = '';
        this.titleError = false;
    }
    validate(){
        if (this.title === ''){
            return false;
        }
        return true;
    }

}
