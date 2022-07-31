import { makeObservable, observable } from "mobx";

class Store {
    @observable a: null = null;

    constructor() {
        makeObservable(this);
    }
}

export default new Store();
