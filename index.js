const validator={isEmail:e=>(re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,re.test(e)),max:(e,t)=>e.length<t,min:(e,t)=>e.length>t,equalLength:(e,t)=>e.length==t,dataTypeMatch:(e,t)=>typeof e===t,ValidateExtension:e=>{var t=e.allowedFiles,a=document.getElementById(e.fileID);return!!new RegExp("([a-zA-Z0-9s_\\.-:])+("+t.join("|")+")$").test(a.value.toLowerCase())},isDate:e=>{if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return!1;var t=e.split("/"),a=parseInt(t[1],10),r=parseInt(t[0],10),s=parseInt(t[2],10);if(s<1e3||s>3e3||0==r||r>12)return!1;var n=[31,28,31,30,31,30,31,31,30,31,30,31];return(s%400==0||s%100!=0&&s%4==0)&&(n[1]=29),a>0&&a<=n[r-1]},isUrl:e=>/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(e),isTime:e=>/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(e),onlyLetters:e=>{/^[a-zA-Z]+$/.test(e);return re.test(e)},letterAndint:e=>{/^[a-z0-9]+$/i.test(e);return re.test(e)},sanitizeSymbols:e=>e.replace(/[^a-z0-9]/gi,"")};module.exports=validator;