const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_42_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU4LFxuICAgICAgICA1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpXeXVNRlJJb1B2RTJkdnkrdnVtamY0YkVxMkl1VVNUWStVbm9WeHM1OW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZqZHEyeU93VF8yNmhPR1pZc09JSWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGEyMmJiNDMtYjVhNC00ZGM5LTkwNWUtYjZhZGRmMzg5OWFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAxNDgsXG4gICAgICAxNDAsXG4gICAgICA0NSxcbiAgICAgIDEwNCxcbiAgICAgIDEyMyxcbiAgICAgIDEyNixcbiAgICAgIDg0LFxuICAgICAgMjEwLFxuICAgICAgMjcsXG4gICAgICAxNjYsXG4gICAgICAxOTYsXG4gICAgICA4NCxcbiAgICAgIDMwLFxuICAgICAgMjQ1LFxuICAgICAgMTksXG4gICAgICAyMTcsXG4gICAgICAyMTAsXG4gICAgICAyNDIsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAyNSxcbiAgICAgIDEwOSxcbiAgICAgIDIwMCxcbiAgICAgIDE3OCxcbiAgICAgIDIxNixcbiAgICAgIDI0NSxcbiAgICAgIDQ1LFxuICAgICAgMTM1LFxuICAgICAgOTQsXG4gICAgICAxMSxcbiAgICAgIDc5LFxuICAgICAgMjA3LFxuICAgICAgMjA0LFxuICAgICAgMTg0LFxuICAgICAgMzEsXG4gICAgICAyNTAsXG4gICAgICAyMzEsXG4gICAgICAyMSxcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTU1lCWDhNVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY5MzIyNjc5OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDczNjUwNDgxOTg4NDo3MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKK3l1dnNHRUlTNms3VUdHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJmSlVYMC9wazU4UFMrWEtoa3VPQU9kcW1ldnRRZHRtQlkzY0t3UU50UzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRFNkQ2I3ZnRJL0FXRXY1T29xamEzckxNRXFjb251emozRFlueUxxQm9ORTRheHdzNWxyTUJUbE5xc3RVSmZRbk1zY3lod1V3RkdHR1JtR0xLV1VSQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL2FIaUVmTFJCL0xTMEpFN2J3R205SkJuNUQxaWFSS3h0VG5XTUZkeG5FSHorU2trWEpsRFpDdFJlTXdib1Nmblkwa01ZTDV4b2cyK204SjdIdGJsZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY5MzIyNjc5OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwODA1MjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMVHNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxUcy5qc29uIjogIntcImtleURhdGFcIjpcInlUalNlaDZHVXNDaElqSjE2SEcyVTJrZzZXMmdHUFhHbUhLaUlXV2ZZZG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg2OTUxOTEzNCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
