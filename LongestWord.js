function LongestWord(sen) { 

  // code goes here 
  let punctuation = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  
  const array=sen.replace(punctuation, '').split(" ") ;
  let longest=array[0];
  for(i=1;i<=array.length-1;i++){
    if(array[i].length>longest.length){
      longest=array[i];
    }
  }
  return longest.toString(); 

}
