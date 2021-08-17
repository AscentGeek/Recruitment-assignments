function solution(triangle){
    for(let i=1; i<triangle.length; i++){
        for (let j=0; j<triangle[i].length; j++){
            if(i==1) {
                triangle[i][j] += triangle[0][0];
            } else if(j==0){
                triangle[i][j] += triangle[i-1][j]
            } else if(j==i){
                triangle[i][j] += triangle[i-1][j-1]
            } else{
                triangle[i][j] += Math.max(triangle[i-1][j-1], triangle[i-1][j])
            }
        }
    }
    let result = triangle[triangle.length-1];
    return Math.max(...result);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));