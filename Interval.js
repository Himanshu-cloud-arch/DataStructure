
function findInterval(intervals){
    let finalArr=[]
for(let i=0;i<intervals.length;i++){
    // for(let j=0;j<intervals[i].length;j++){
    let j=0;
    while(j<intervals[i].length)
     if((intervals[i][j]<[intervals[i][j+1]]) && (intervals[i][j+1]>intervals[i+1][j])){
       finalArr.push([intervals[i][j],intervals[i+1][j+1]])
       j+2
     }else{
        finalArr.push([intervals[i][j],intervals[i][j+1]])
        j++
     
     
     
    
    }


}
return finalArr

}

let intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(findInterval(intervals))
