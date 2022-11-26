// code your solution here



function checkYear(element){
  return (element.result === 'W')
}

function superbowlWin(record){
  if(record.find(checkYear) != undefined){
    return record.find(checkYear).year
  } else {return record.find(checkYear)}
}
