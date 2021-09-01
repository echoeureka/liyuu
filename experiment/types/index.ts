type Method = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'DELETE'

interface Config {
  url: string
  method?: Method
  params?: any
  data?: any
}

export { Config }
