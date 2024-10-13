// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJyWUJzSXNsZGtBS3U0enlnRTlmS0ZaMlFEaU4yaWFqQlhSS2FCaXFrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2VWKzdWVStSSWtJRDNjdEdldXVUUGF1ekxISUdYUTRidTBpNG8wSDNHZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRGUvQ2dmZ1lNNVpFNDZjWTN5T3l1OGRubGQ3YmZOYXpqbHQvK2xucVYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2ZDNqRkxmVVA0UGcxb040UmFDTTRYM0dLSUhlNVg1eWNCcG1ETFp1QWlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCRVgrOGl1VDBjRHY2c01nR2VvR2pNVEUyWUdjRk9rK1dJS3F3QzNtMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpVcm5jYmxGOFlHNmF0QTlETTdpSnNyRDZNRnJIVHN5Q1pXTEs0Y1lxU009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEpnSlVIUmc3MzFkR0xsa3VCSEp0RGhiM3g5VC9wTEhiTGF3UlBBemluQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0I4OUx2ajRUV2IyZzcvTEJRc2o1RU01ZEZLYU5NUTk2VHBRNTdBcGpuVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9VYUF6ZFJ6NEEyOWxiOUg0bWo3SS9tVjZ6cFhjYWZKL0dRQ2d0Wnl2WmhnUzVhTjB4SnYxMDd1YXIxQ1dFcGo3SUtNaFRKc0Jyb2FNc1dCV2ovZWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJSaXZjOUdPejQzZWNRRXN4Z3ZMK2NYc0pWMkxRWmtBRVNza3MrUGRaQkhZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBUmhIRUdnWlFneURsY2haa0Q3Ym1nIiwicGhvbmVJZCI6IjgzMmIxZDM3LTI3NzYtNDQzMi1iYTg1LWM5Mjc1OTM1OWFiNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzTjNEVXJvZFc0cnFDVFVGMG1rZDc2dU5rUDQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR4cGMrMHJVZ1M3YW5IWlh1RVZLd3g4RjNCTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lENmlJd0hFTStocjdnR0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9aYXFsRE93aDBtT2FCdGcwWjcvL0Y1TXI0d1BGaEVHS3hvVTJ6N0tZUVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJiTzh5K1hzRjd0dUxjY24raWVaQUNoVlVMMzdhQkdpMkxaVkY0OWw1ZTZ1eUFwUlF5R2tvMnMwWEZTVVNIbmNlNHNtbEt3R3ZYc3l6U3ZDUmg0L2lnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6QmpNYUpQVDg4blFOL1pMQ0dzbjQ2anNUU0pjenF5YVBITDU5SWtDdXYrVUFxZUZSZ3JlQVl5YWN3aDIrYkQ4ckdpVWNSSFVud1N6YWJIMW5TRE9nZz09In0sIm1lIjp7ImlkIjoiMjMzNTkyMTQyMjEwOjk2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDM0OTExOTExNjQ5NDA6OTZAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU5MjE0MjIxMDo5NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmMldxcFF6c0lkSmptZ2JZTkdlLy94ZVRLK01EeFlSQmlzYUZOcyt5bUVGIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODgyNzYxMiwibGFzdFByb3BIYXNoIjoiMm92cXl5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEamIifQ=="",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : true,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : false,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "©Fredie",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255745086279",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : true, 
};


module.exports = config;
