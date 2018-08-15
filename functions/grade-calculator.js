//You got a 'letter grade' or 'percentage' !  
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (stuScore, possScore) {
  const numGrade = (stuScore / possScore) * 100
  let letterGrade = ''
  
  if (numGrade >= 90) {
    letterGrade = 'A'
  } else if (numGrade >= 80) {
    letterGrade = 'B'
  } else if (numGrade >= 70) {
    letterGrade = 'C'
  } else if (numGrade >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }
  return `You got a ${letterGrade} or ${numGrade}%.`
}

const result = gradeCalc(15, 50)
console.log(result)