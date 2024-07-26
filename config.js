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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_24_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM2LFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUyLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdhUFhIb0NPWk16a2NVNXVWbGhjOGJBcDZlSE54TUI2dzdKeWZCR2gxVTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJmSUE2a2pqUS1HMnNHemNicFNEd1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGViMGNkYjEtODkxMC00Zjg5LTkwM2ItMDZiYzc4NDQxMDcxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMTk5LFxuICAgICAgMjQ5LFxuICAgICAgMjExLFxuICAgICAgMjQxLFxuICAgICAgMTQ5LFxuICAgICAgMTIzLFxuICAgICAgMjI0LFxuICAgICAgMTg1LFxuICAgICAgODMsXG4gICAgICA5MixcbiAgICAgIDEzNSxcbiAgICAgIDE0MSxcbiAgICAgIDEzMixcbiAgICAgIDEzNyxcbiAgICAgIDE5NCxcbiAgICAgIDEzOSxcbiAgICAgIDEzLFxuICAgICAgMyxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAzMixcbiAgICAgIDE2MixcbiAgICAgIDExNixcbiAgICAgIDE3MixcbiAgICAgIDEwNCxcbiAgICAgIDEyLFxuICAgICAgMjUsXG4gICAgICAxOTIsXG4gICAgICAxNzMsXG4gICAgICAxMDksXG4gICAgICA0LFxuICAgICAgMTI0LFxuICAgICAgNzcsXG4gICAgICAxNixcbiAgICAgIDE2OCxcbiAgICAgIDc2LFxuICAgICAgMTgsXG4gICAgICA5MixcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFM1I5Wlc3SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY5MzIyNjc5OjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDczNjUwNDgxOTg4NDo2OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKK3l1dnNHRUt5VWlyVUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJmSlVYMC9wazU4UFMrWEtoa3VPQU9kcW1ldnRRZHRtQlkzY0t3UU50UzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibGZsVEx1TC9DNWQ3cGQ3RzdhSkl5azRXVEo5U0d5dWpvc3pTMHNqZHl4MWN0b3J0ZVhlUnhoOHNsWEtlTlhmSkFFQlNURWpvdWYrOHVoamd2MzVRQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYXZtcURKSjNRVzhXRXlIQ2tzUWFWRzFxa0Ixc0k3aU5YcGpZczZ2Nmlvcnc2SllneWRhMi83RUV0Y2RaZm5ZQ0ZDb3BHME5LUEFZaGNDRHdXSjg0QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY5MzIyNjc5OjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5MjgyNDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMVHNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxUcy5qc29uIjogIntcImtleURhdGFcIjpcInlUalNlaDZHVXNDaElqSjE2SEcyVTJrZzZXMmdHUFhHbUhLaUlXV2ZZZG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg2OTUxOTEzNCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Lawiᴅ",
  ownername:process.env.OWNER_NAME|| "Lawi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Lawi"  ).toUpperCase(),



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
