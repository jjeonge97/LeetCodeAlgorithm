/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length < 2) return true;
    
    let [x0,y0] = coordinates[0];
    let [x1, y1] = coordinates[1];
   // let dis = (y1 - y0) / (x1 - x0); // 기울기 
    
    for(let i = 2; i < coordinates.length; i++) {
        const [x,y] = coordinates[i];
        
        if ((y1 - y0) * (x - x0) !== (y - y0) * (x1 - x0)) return false;
    }
    
    return true;
    
};