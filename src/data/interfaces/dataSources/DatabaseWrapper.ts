export interface DatabaseWrapper {
    create(data: any): Promise<any>;
    findUnique(query: object): Promise<any>;
}
