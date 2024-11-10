const knightMoves = function(start, end) {
    const moves = [
        [-2,1], [2,1], [-2,-1], [2,-1],
        [-1,2], [1,2], [-1,-2], [1,-2],
    ];

    const queue = [start];
    const visited = new Set();
    const parent = new Map();

    visited.add(`${start[0]},${start[1]}`);
    parent.set(`${start[0]},${start[1]}`, null); // Starting node has no parent so it is set to null

    while (queue.length) {
        const [x, y] = queue.shift();

        if (x === end[0] && y === end[1]) {
            const path = [];
            let current = `${x},${y}`;
            while (current) {
                const [cx, cy] = current.split(',').map(Number);
                path.unshift([cx, cy]);
                current = parent.get(current);
            }
            return path;
        }

        for (let move of moves) {
            const [kx, ky] = move;
            const next = [x + kx, y + ky];

            if (next[0] >= 0 && next[0] <= 7 && next[1] >= 0 && next[1] <= 7) {
                const key = `${next[0]},${next[1]}`;
                if (!visited.has(key)) {
                    visited.add(key);
                    queue.push(next); // key is a string
                    parent.set(key, `${x},${y}`);
                }
            }
        }
    }
    return null;
}

console.log(knightMoves([0,0],[3,3]))