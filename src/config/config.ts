require('dotenv').config();

export const config = {
    appname: "myasoebi",
    web: {
        port: process.env.PORT || '8083',
        jwt_secrete:process.env.JWT_SECRET || 'my@50381.C03'
    },
}