const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "2c9AxRoC#2idz_QjbUhWWlkjM62Snu5hKE9pHu5vkMTlPOqED-4o",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "919356730236",
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || "true",
    MODE: process.env.MODE || "public"
    ALIVE_IMG: process.env.ALIVE_IMG || "https://api.tioo.eu.org/file/24Mz9c3fxSHl.jpeg",
    PREFIX: process.env.PREFIX || ".",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_NAME: process.env.OWNER_NAME || "RAHUL-JI",
    BOT_NAME: process.env.BOT_NAME || "RAHUL-MASTER-V3",
    CAPTION: process.env.CAPTION || "Made By RAHUL-MASTER-V3",
};
