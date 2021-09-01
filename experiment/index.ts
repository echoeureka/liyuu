import { Config } from './types/index'
import xhr from './xhr'

function axios(config: Config) {
  xhr(config)
}

export default axios
