import { AxiosPromise } from "axios";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export type Callback = () => void;

export interface ModelAttributes<T> {
  getAll(): T;
  get<K extends keyof T>(key: K): T[K] | undefined;
  set(update: T): void;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
