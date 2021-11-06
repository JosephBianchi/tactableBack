import fetch from 'node-fetch';
import { jest } from '@jest/globals'
import { default as utils} from 'ts-jest/utils'
import "reflect-metadata";

import { ToDoClient } from '../../entities';

jest.mock('node-fetch', () => jest.fn());

// beforeEach(() => {
//   utils.mocked(fetch).mockClear();
// });

describe('ToDoClient', () => {
  describe('getIndex', () => {
    it('should return a list of to-dos', async () => {
      utils.mocked(fetch).mockImplementation((): Promise<any> => {
        return Promise.resolve({
       json() {
         return Promise.resolve({name: 'To Do'});
       }
     });
   });

       const toDos: any = await ToDoClient.prototype.getIndex();
       expect(utils.mocked(fetch).mock.calls.length).toBe(1);
       expect(toDos).toBeDefined();
       expect(toDos.name).toBe('To Do');
    })
  })
})
