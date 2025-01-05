        }
            if (!args) return await m.reply("_Enter Query,Number_");
            let [query,
                amount] = args.split(",");
            let result = await gimage(query, amount);
            await m.reply(
                `_Downloading ${amount || 5} images for ${query}_`
            );
            for (let i of result) {
                await m.sendMsg(m.jid, i, {}, "image")
            }

        } catch (e) {
            console.log(e)
        }
    }
);


rahul(
    {
        name: "gdrive",
        fromMe: isPublic,
        desc: "Instagram story downloader",
        category: "downloader",
    },
    async ({
        m, client, args
    }) => {
        args = args || m.quoted?.text;
        if (!args) return await m.reply("_Enter Link_");
        var document = await fetch(`${API}/api/downloader/gdrive?url=${args}`);
        var zip = await document.json();
        client.sendMessage(m.jid, { document: { url: zip.data.downloadUrl }, fileName: `${zip.data.fileName}`, mimetype: "application/x-zip-compressed" }, { quoted: m })
    }
);

Sparky(
    {
        name: "mediafire",
        fromMe: isPublic,
        desc: "Instagram story downloader",
        category: "downloader",
    },
    async ({
        m, client, args
    }) => {
        args = args || m.quoted?.text;
        if (!args) return await m.reply("_Enter Link_");
        var document = await fetch(`${API}/api/downloader/mediafire?url=${args}`);
        var zip = await document.json();
        client.sendMessage(m.jid, { document: { url: zip.data.link }, fileName: `${zip.data.name}`, mimetype: "application/zip" }, { quoted: m })
    }
);


rahul(
    {
        name: "xvdl",
        fromMe: isPublic,
        desc: "Instagram story downloader",
        category: "downloader",
    },
    async ({
        m, client, args
    }) => {
        args = args || m.quoted?.text;
        if (!args) return await m.reply("_Enter Link/Reply to a link_");
        m.reply("_Downloading..._")
        let xvdl = await fetch(`${API}/api/downloader/xdl?url=${args}`);
        var data = await xvdl.json();

        client.sendMessage(m.jid, { video: { url: data.data }, caption: "ðŸ¤¤ðŸ’¦" }, { quoted: m })
    }
);


rahul({
    name: "play",
    fromMe: isPublic,
    desc: "Download and play your favorite audio or video directly from a link.",
    category: "downloader",
},
async ({
    m,
    client,
    args
}) => {
    try{
        args = args || m.quoted?.text;
if (!args) return await m.reply("_enter query or reply to link_");
let mes = await client.sendMessage(m.jid, { text : `Please wait, searching...` } , { quoted : m })
let sample = await fetch(`https://viper.devstackx.in/api/v1/yta?query=${args}`);
var data = await sample.json();
const songbuff = await (await fetch(`${data.data.downloadUrl}`)).buffer()
client.sendMessage(m.jid, { text : `_Downloading : ${data.data.title}_` , edit : mes.key })
await client.sendMessage(m.jid , {audio : songbuff,  mimetype : 'audio/mpeg'} , { quoted : m })
    } catch(e) {
        m.reply(e)
    }
    }
);

rahul({
    name: "song",
    fromMe: isPublic,
    desc: "Download and play your favorite audio or video directly from a link.",
    category: "downloader",
},
async ({
    m,
    client,
    args
}) => {
    try{
        args = args || m.quoted?.text;
if (!args) return await m.reply("_enter query or reply to link_");
let mes = await client.sendMessage(m.jid, { text : `Please wait, searching...` } , { quoted : m })
let sample = await fetch(`https://viper.devstackx.in/api/v1/yta?query=${args}`);
var data = await sample.json();
const songbuff = await (await fetch(`${data.data.downloadUrl}`)).buffer()
client.sendMessage(m.jid, { text : `_Downloading : ${data.data.title}_` , edit : mes.key })
await client.sendMessage(m.jid , {audio : songbuff,  mimetype : 'audio/mpeg'} , { quoted : m })
    } catch(e) {
        m.reply(e)
    }
    }
);

// rahul(
//     {
//         name: "ytv",
//         fromMe: isPublic,
//         category: "downloader",
//         desc: "",
//     },
//     async ({
//         m, client, args
//     }) => {
//         args = args || m.quoted?.text;
//         if (!args) return await m.reply("_Reply to a link_");
//         let ytdlmsg = await client.sendMessage(m.jid, { text: "_Please Wait...._" }, { quoted: m })
//         let data = await fetch(`${API}/api/downloader/ytv?url=${args}`);
//         var result = await data.json();
//         await client.sendMessage(m.jid, { text: result.data.title, edit: ytdlmsg.key })
//         client.sendMessage(m.jid, { video: { url: result.data.dlink }, caption: result.data.title }, { quoted: m })
//     }
// );
