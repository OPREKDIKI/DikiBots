import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://ibb.co/LSY5j5m'
let but1 = '𝐎𝐖𝐍𝐄𝐑'
let bit = usedPrefix + 'owner'
let donasi = `⮕ 𝐆𝗼𝐩𝐚𝐲 = [Gadak]
⮕ 𝐃𝐚𝐧𝐚 = [081260730830]
⮕ 𝐒𝐚𝐰𝐞𝐫𝐢𝐚 = [Gadak🗿]
*Atau Scan Qr Di Atas Untuk All Payment*

𝐍𝗼𝐭𝐞 : 𝐉𝐢𝐤𝐚 𝐒𝐮𝐝𝐚𝐡 𝐃𝗼𝐧𝐚𝐬𝐢 𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐊𝐢𝐫𝗺
𝐁𝐮𝐤𝐭𝐢 𝐊𝐞 𝐎𝐰𝐧𝐞𝐫!!

𝐀𝐭𝐚𝐮 𝐊𝐥𝐢𝐤 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡`
await conn.sendButtonDoc(m.chat, mm1 + ' Donasi ' + mm2, donasi, but1, bit, fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: '𝑺𝒄𝒂𝒏 𝑸𝑹 𝑰𝒏𝒊 𝑼𝒏𝒕𝒖𝒌 𝑩𝒂𝒚𝒂𝒓'  
				}
			}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler