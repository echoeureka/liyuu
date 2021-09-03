import { Config } from './types/index';

const xhr: (config: Config) => void = (config: Config): void => {
  const { url, method = 'GET', params, data = {} } = config;

  const request: XMLHttpRequest = new XMLHttpRequest();
  request.open(method.toUpperCase(), url, true);
  request.send(data);
};

export default xhr;
