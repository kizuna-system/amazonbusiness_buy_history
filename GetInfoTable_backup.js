function GetInfoTable(element, textToWrite){
  
  var retTable = document.querySelector("#backgroundTable > tbody > tr > td > table > tbody > tr:nth-child(3) > td > div:nth-child(2) > table");
  if(retTable == null){
    retTable = document.querySelector("#backgroundTable > tbody > tr > td > table > tbody > tr:nth-child(3) > td > div:nth-child(3) > table");
  }

  return retTable.outerHTML;
}