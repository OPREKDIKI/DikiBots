import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://ibb.co/LSY5j5m'
let but1 = 'ððððð'
let bit = usedPrefix + 'owner'
let donasi = `â® ðð¼ð©ðð² = [Gadak]
â® ððð§ð = [081260730830]
â® ððð°ðð«ð¢ð = [Gadakð¿]
*Atau Scan Qr Di Atas Untuk All Payment*

ðð¼ð­ð : ðð¢ð¤ð ðð®ððð¡ ðð¼ð§ðð¬ð¢ ðð¢ð¥ðð¡ð¤ðð§ ðð¢ð«ðº
ðð®ð¤ð­ð¢ ðð ðð°ð§ðð«!!

ðð­ðð® ðð¥ð¢ð¤ ðð¢ ððð°ðð¡`
await conn.sendButtonDoc(m.chat, mm1 + ' Donasi ' + mm2, donasi, but1, bit, fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'Â© ðð¤ð²ðð¼ð­',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'Â© ðð¤ð²ðð¼ð­',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'ðºððð ð¸ð¹ ð°ðð ð¼ðððð ð©ðððð'  
				}
			}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler