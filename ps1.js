function solution(scoville, K) {
    let scov = Array.from(scoville.sort());
    let cnt = 0;

    while(scov.some(x => x<K)){
        let header = scov.shift();
        if(header < K){
            scov[0] = header + scov[0]*2;
            scov = scov.sort((a, b) => a - b);
            cnt++;
        }
        if(scov.some(x => x<K)){
            if(scov.length==1) return -1
        }
    }

    return cnt;
}

console.log(solution([1, 2], 8)); // 음식과 스코빌 지수를 입력하여 실행
// console.log(solution([1, 2, 3, 8, 10, 12], 10));