import { Config } from './types/index'

const xhr = (config: Config) => {
  const { url, method = 'GET', params, data = {} } = config

  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}

export default xhr
