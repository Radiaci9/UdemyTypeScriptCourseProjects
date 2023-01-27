import axios, { AxiosPromise } from 'axios';
import { Sync } from '../types';

class ApiSync<T extends {id?: number}> implements Sync<T> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    if (data.id !== undefined) {
      return axios.put(`${this.rootUrl}/${data.id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}

export default ApiSync;