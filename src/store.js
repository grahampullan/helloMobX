import { makeAutoObservable, observable } from "mobx";

export class DataStore {

    constructor() {
        this.dataObjects=[];
    }

    addDataObject(data) {
        const dataObj = new DataObject(data);
        this.dataObjects.push(dataObj);
    }

}

export class DataObject {

    constructor(data) {
        this._data = data; // data must be an array
        this.id = 0;
        this.name = "name";
        makeAutoObservable(this);
    }

    set data(newData) {
       this._data.replace(newData);  
    }

    get data() {
        return this._data;
    }

}