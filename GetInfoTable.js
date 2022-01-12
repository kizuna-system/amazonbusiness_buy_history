function GetInfoTable(element,var1){
  
  var selectors = document.querySelectorAll("#backgroundTable h2");
  const retTable = selectors[0].nextElementSibling.outerHTML;

  return retTable;
}