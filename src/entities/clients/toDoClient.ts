import { injectable, inject } from 'inversify';
import fetch from 'node-fetch';

import SERVICE_IDENTIFIER from '../../constants/identifiers.js';
import { Client } from '../../interfaces';

const resourceUrl = 'https://jsonplaceholder.typicode.com';

@injectable()
export class ToDoClient implements Client {

  public async getIndex() {
    try {
      const response = await fetch(`${resourceUrl}/todos`);
      return await response.json();
    } catch(err) {
      console.log(err);
    }
  }
}
