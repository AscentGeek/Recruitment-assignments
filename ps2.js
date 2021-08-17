function solution(w){
    if(w=="") return "";
    let lcnt = 0;
    let rcnt = 0;
    let check = true;
    let u, v = "";

    for(let i=0; i<w.length; i++) {
        if (w[i] == "(") lcnt++;
        else rcnt++

        if (lcnt == rcnt) {
            u = w.slice(0, i + 1);
            v = w.slice(i + 1);
            break;
        } else if(rcnt > lcnt) check = false
    }

    if(check) return u + solution(v);
    else{
        let str = "(" + solution(v) + ")";
        u = u.slice(1, u.length-1);
        for(let i=0; i<u.length; i+=1) {
            if(u[i]==='(') str += ")";
            else str += "(";
        }
        return str;
    }
}

console.log(solution("()))(("));
// console.log(solution("()))((()"));
// console.log(solution("())()("));