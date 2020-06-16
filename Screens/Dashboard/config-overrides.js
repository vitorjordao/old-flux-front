const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {

  alias({
    Design_Thinking: '../../Design_Thinking',
  })(config)

  return config
}