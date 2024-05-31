const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sasokibro79@gmail.con"
global.location="Casablanca,morocco."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || Casablanca,Morocoo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Rayan²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212684813143";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_47_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAzMixcbiAgICAgICAgNTksXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib0VyM3NJNjlJVWFlRUdpVndDb1p6M2hPS24ralNkWGVCOVd3SDlJNHh0ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNFpVT0tZcFJUc2FSaGxaSFhFYmR1QVwiLFxuICBcInBob25lSWRcIjogXCIwMzkyZWUwYi1mZTE4LTQwMWUtODg2ZC0zYjBjYzc1ZTFmZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAxNzAsXG4gICAgICAyNDUsXG4gICAgICAxMDcsXG4gICAgICAyNDgsXG4gICAgICAxMTUsXG4gICAgICAyMDYsXG4gICAgICAxMTIsXG4gICAgICAxNjgsXG4gICAgICAxNjgsXG4gICAgICAxMDUsXG4gICAgICAyMTUsXG4gICAgICAxMTQsXG4gICAgICA4NSxcbiAgICAgIDgyLFxuICAgICAgODEsXG4gICAgICAxNDYsXG4gICAgICA4NyxcbiAgICAgIDQxLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMTc4LFxuICAgICAgMTgyLFxuICAgICAgMTY0LFxuICAgICAgMjM3LFxuICAgICAgMzQsXG4gICAgICAxMjMsXG4gICAgICAxMzksXG4gICAgICA2MyxcbiAgICAgIDExOSxcbiAgICAgIDE2OSxcbiAgICAgIDE2LFxuICAgICAgMTcxLFxuICAgICAgMTgyLFxuICAgICAgMTMwLFxuICAgICAgMTY5LFxuICAgICAgMjQwLFxuICAgICAgMTEzLFxuICAgICAgOTMsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUZTUjFSMzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY4NDgxMzE0Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYzODM4NTg3MDQ0NTc6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMckF3dHdJRVAyZjVMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhlSnVXNmtUL29iUGlWcC9yekQ1WlBxZWdMQUhUTFhWazFONTZSSi9XUzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMXV2bjl5eHBvU0V4Uk1Yc21tTC8zdHpCc1I1NWpwTWtROThObmNPNU50K2tvTmlqNmQxcjl1MkllaFdsY2FBemxkb0lXbTY0S1ZMZ2NTZWZoc3phZ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRi91czRScVhnUU1oZFUvRFV1QXFoQjQ2VGVhRWNpeC9JZWx2eU5LOU9kMFBEaUpzaDNubVJMRFQ5dFNaRWtpa0t5UVRHcURCd0x6SjR3VXhleEZVQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjg0ODEzMTQzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzExMjgzMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Rayan-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Rayan kh",
  packname: process.env.PACK_NAME || "Rayan kh",
  botname : process.env.BOT_NAME  || "Rayanᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Rayan",


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
