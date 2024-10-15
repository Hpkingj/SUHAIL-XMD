const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50932905173";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_50_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NCxcbiAgICAgICAgODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibis1R1BIT0tWSi8yc1lRQWNpM0gvWTJ1ZkljMzFxRUUrdk14bldBRFhodz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI1MDkzMjkwNTE3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDMxRjVEMEJENzM0QUQ1MjA0NTlENUFDQTQzQUMzQjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MDI5MDQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5MzI5MDUxNzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY4REY5RkYzRkE0RjU0OTY0RTEzRTIzNjVDRjI3Mjg0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTAyOTA0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2Y2JjYmZkQVQteVR1dzMwQ2RCQ0d3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg0YTk2YWE0LWU3MTYtNDY2Zi04NWJjLWQwZjNiZTA2MjRmM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICAxMjksXG4gICAgICAyNSxcbiAgICAgIDk1LFxuICAgICAgMjQ2LFxuICAgICAgMTQyLFxuICAgICAgMzksXG4gICAgICAxMzYsXG4gICAgICAxLFxuICAgICAgMzMsXG4gICAgICAyMzEsXG4gICAgICAxMzYsXG4gICAgICA1NCxcbiAgICAgIDEzNCxcbiAgICAgIDk1LFxuICAgICAgMTM5LFxuICAgICAgOSxcbiAgICAgIDEzMyxcbiAgICAgIDE4NSxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMTkwLFxuICAgICAgMTc5LFxuICAgICAgMTgwLFxuICAgICAgNzgsXG4gICAgICAxNSxcbiAgICAgIDE3MCxcbiAgICAgIDgwLFxuICAgICAgNyxcbiAgICAgIDExMSxcbiAgICAgIDY0LFxuICAgICAgMTUsXG4gICAgICAxODcsXG4gICAgICAyNTAsXG4gICAgICAxMTEsXG4gICAgICA5NCxcbiAgICAgIDE5MCxcbiAgICAgIDE1LFxuICAgICAgOTAsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOU0zVzdaRVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTMyOTA1MTczOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTU5NjQ2MDM1NjgxNDQ6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmFyenBvQ0VLbkh1N2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYWDF3V0Z4VEEzdUkranJDb2ZzU2hTTExDb0Y2K2laZnZ5WjFRd080VGpJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRCZEtEWFJyVjVPeGhSQlZWV01zeTc1WlJYcU90UEV6eXRUSDFtRk5vOTFwbUhXUG0wOTVnZS9ySnpZNk0rblE4b1ZteWR0Z01iN3VtZTM5cnJudkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFkL3picWxmZnpZcDIwbFpzTndnc0ZXbGEzSG53bStpNEl0Z2xRRitHSkJwUEZFQ05wVkVQUjI4UkNSTmhyQy9WLy9lSm4xVXZDNHV6dUh4Q3h4bEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTMyOTA1MTczOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MDI5MDM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRExOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFETE4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvOEl0cTZQTlFCbi9pUU5WdHROL1NOZ2o2M0JUdXBKZnNOdDZCeUhPbklrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5MjY4MDQwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5MDI5MDQyMjUwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
