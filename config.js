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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_18_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICA1MixcbiAgICAgICAgODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY2LFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICA3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICA0MyxcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWjl4V1huckFibzBLTlN1d3loRVZIL0ErTGlORGJOQ29mRWtzZktDZVhNMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUmMxRzZIODBSa2FXc3ZZTUE3SXVZQVwiLFxuICBcInBob25lSWRcIjogXCIyMDM4MzIyYy0zZDg0LTRkOTMtOGM2Mi1hMWFmN2UxZGU5YTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgNjIsXG4gICAgICA2MSxcbiAgICAgIDE4MSxcbiAgICAgIDE3MixcbiAgICAgIDI0NSxcbiAgICAgIDIxNyxcbiAgICAgIDE1MCxcbiAgICAgIDU1LFxuICAgICAgOTUsXG4gICAgICAxNDksXG4gICAgICAyMTAsXG4gICAgICAxNjIsXG4gICAgICAyNCxcbiAgICAgIDM1LFxuICAgICAgMTgzLFxuICAgICAgNjgsXG4gICAgICAxMTksXG4gICAgICAyMTksXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAyMjgsXG4gICAgICAzNyxcbiAgICAgIDI4LFxuICAgICAgMTgwLFxuICAgICAgNTUsXG4gICAgICA0MCxcbiAgICAgIDE5OCxcbiAgICAgIDI1MCxcbiAgICAgIDE5MCxcbiAgICAgIDUyLFxuICAgICAgMTcxLFxuICAgICAgNjMsXG4gICAgICAxNSxcbiAgICAgIDYsXG4gICAgICAxMzEsXG4gICAgICAxNCxcbiAgICAgIDY0LFxuICAgICAgMjI5LFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZMNFRCTlo1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDIwMDExMzg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIllvdXJOdXJzZVwiLFxuICAgIFwibGlkXCI6IFwiMTY5MjgyMzk0NzA2MTUyOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFd2cTRzRkVNRzNqYlVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqczBrYlFFR2hGVTB2Sms3eTVaL1VEVDQwWmhhZkZJOWZTdTFYVmdEYjJnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlliYkVweGZWeFRxa2poand5dXBtdEphVG1vcG90VWMwam1WRmxDN01mbnV0azVsMHpUeDE3UkJ6NDltd2sxbFdjcXhyakQ5R1V3ZVFyU2dVTFZRWkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjQ4dE8xUTd4MGpoemx1MVZLQ1dBTkZEdW5sQ2dYdjBEbEszbmJhbzJwSVg3a2tEZy9RNEljZk9oWFV1SnlXOEFpeW83U0ZLNWtlc0E0VDFMQ0FyTUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MjAwMTEzODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTgxODk0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
