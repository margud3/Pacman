export interface Adapter<T> {
    adapt(object: any): T;
}
