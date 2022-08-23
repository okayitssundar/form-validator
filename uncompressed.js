 const validator =  {
  isEmail : (email) => {
     re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email);
  },
   max : (input, length) => {
    return (input.length < length)
  },
   min : (input, length) => {
    return (input.length > length)
  },
   equalLength : (input, length) => {
    return (input.length == length)
  },
   dataTypeMatch : (input, dataType) => {
    return (typeof input === dataType)
  },
   ValidateExtension : (options) => {
    var allowedFiles = options.allowedFiles;
    var fileUpload = document.getElementById(options.fileID);
    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
    if (!regex.test(fileUpload.value.toLowerCase())) { return false; }
    return true;
 },
     isDate : (dateString) => {
      // First check for the pattern "mm/dd/yyyy"
      if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;
      var parts = dateString.split("/");
      var day = parseInt(parts[1], 10);
      var month = parseInt(parts[0], 10);
      var year = parseInt(parts[2], 10);
      if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

      var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
      return day > 0 && day <= monthLength[month - 1];
 
  },
   isUrl : (input) => {
    var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    return re.test(input)
  },
   isTime : (input) => {
    var re = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    return re.test(input)
  },
   onlyLetters : (input) => {
    let res = /^[a-zA-Z]+$/.test(input);
    return re.test(input)
  },
     letterAndint : (input) => {
    let res = /^[a-z0-9]+$/i.test(input);
    return re.test(input)
  },
   sanitizeSymbols : (input)=>{
      let b = input.replace(/[^a-z0-9]/gi,'');
    return b;
  },
}
module.exports = validator