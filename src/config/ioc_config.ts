import "reflect-metadata";

import { Container } from "inversify";

import {
  Client,
  Manager,
} from "../interfaces";

import {
  ApiManager,
  ToDoClient,
} from "../entities";

import SERVICE_IDENTIFIER from "../constants/identifiers";

let container = new Container();

container.bind<Manager>(SERVICE_IDENTIFIER.MANAGER).to(ApiManager);
container.bind<Client>(SERVICE_IDENTIFIER.CLIENT).to(ToDoClient);

export default container;
