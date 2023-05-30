/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const row = mat.length;
    const col = mat[0].length;
    // 2차원 배열 생성
    const result = new Array(row).fill(null).map(() => new Array(col).fill(Infinity));
    const que = []; // 0의 좌표가 들어있는 배열 
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(mat[i][j] === 0) {
                result[i][j] = 0;
                que.push([i,j]) // 0이 위치한 좌표 추가 : 방문해야 할 셀의 목록 저장
            }
        }
    }
    
    const dirc = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 이동할 수 있는 좌표 (위,아래,좌,우)
    
    while (que.length > 0) {
        const [r, c] = que.shift() // 앞에서부터 하나씩 빼서 확인
        
        for(const [dx,dy] of dirc) {
            const newRow = r + dx;
            const newCol = c + dy;
            
            if(newRow >= 0 && newCol >= 0 && newRow < row && newCol < col && result[newRow][newCol] > result[r][c] + 1 ) {
                result[newRow][newCol] = result[r][c] + 1
                que.push([newRow,newCol])
            } 
        }
    }
    return result
};