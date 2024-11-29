const getAge = (dob) =>{
    let yourDob=[new Date(dob).getDate(),new Date(dob).getMonth(), new Date(dob).getFullYear()];
    let currentDate=[new Date().getDate(),new Date().getMonth(), new Date().getFullYear()];
    let age = [];

    if ((currentDate[0]-yourDob[0])>=0) age.push((currentDate[0]-yourDob[0]));
    else {
        age.push((currentDate[0]+getDays(currentDate[1],currentDate[0])-yourDob[0]))
        currentDate[1]-=1;
    }
    if ((currentDate[1]-yourDob[1])>=0) age.push((currentDate[1]-yourDob[1]));
    else {
        age.push((currentDate[1]+12-yourDob[1]))
        currentDate[2]-=1;
    }
    age.push((currentDate[2]-yourDob[2]))

    if(age[2]==0) return age[1]+" Months " +age[0]+ " Days"
    else return age[2]+" Years "+age[1]+" Months"
}

function getDays(month, year){
    switch (month) {
        case 0:
            return 31;
        case 1:
            if(year % 4 ==0)
            return 29;
            else return 28;
        case 2:
            return 31;
        case 3:
            return 30;
        case 4:
            return 31;
        case 5:
            return 30;
        case 6:
            return 31;
        case 7:
            return 31;
        case 8:
            return 30;
        case 9:
            return 31;
        case 10:
            return 30;
        case 11:
            return 31;  
    }
}

module.exports = getAge;