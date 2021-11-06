import { Manager } from './interfaces';
import container from './config/ioc_config.js';
import SERVICE_IDENTIFIER from './constants/identifiers.js';

const start = async () => {
  let api_manager = container.get<Manager>(SERVICE_IDENTIFIER.MANAGER);
  const response = await api_manager.fetchData();
  console.log(response);
}

start();
