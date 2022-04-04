const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@types': path.resolve(__dirname, 'src/types/'),
            '@icons': path.resolve(__dirname, 'src/icons/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
        },
    },
};
