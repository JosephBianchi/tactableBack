import { injectable, inject } from 'inversify';

import SERVICE_IDENTIFIER from '../../constants/identifiers';
import { Manager, Client } from '../../interfaces';

@injectable()
export class ApiManager implements Manager {
  private client: Client;

  public constructor(
    @inject(SERVICE_IDENTIFIER.CLIENT) client: Client
  ) {
    this.client = client
  }

  public async fetchData() {
    return await this.client.getIndex();
  }
}
