//printar as raizes da formula de bhaskara?
//toFixed(5)

const lines = [10.0, 20.1, 5.1];

let a = lines[0]; //10.0
let b = lines[1]; //20.1
let c = lines[2]; //5.1

const bhaskara = (a, b, c) => {
    const delta = b**2 - 4*a*c;
    if (delta < 0) return null;
    return [
        (-b + Math.sqrt(delta)/(2*a)),
        (-b - Math.sqrt(delta)/2*a),
        console.log(delta)
    ]
}

