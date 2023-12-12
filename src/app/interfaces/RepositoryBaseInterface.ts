/**
 * Common interface should be implemented in all repositories has CRUD operations.
 * Note if there a repo not has all CRUD operations then you should create another interface for it
   to not violate Interface Segregation Principle
  * @interface RepositoryBaseInterface
   I delete the other methods because it's not used in this project
   
 */
export default interface RepositoryBaseInterface {
  getAll(): Promise<{}>;
  store(data: {}): Promise<{}>;
}
