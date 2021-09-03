import { Config } from './types/index';
import xhr from './xhr';

function axios(config: Config): void {
  xhr(config);
}

export default axios;
