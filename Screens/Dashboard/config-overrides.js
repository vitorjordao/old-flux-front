const { aliasDangerous, configPaths, CracoAliasPlugin } = require('react-app-rewire-alias/lib/aliasDangerous')

module.exports = function override(config) {

    aliasDangerous({
        Design_Thinking: '../../Design_Thinking',
    })(config);

    return config
}