const polygon = document.querySelector("#svg-polygon");
console.log(polygon);

// замеры стен
const walls = [
  { length: 1665, angle: 0 },
  { length: 947, angle: 90 },
  { length: 557, angle: 0 },
  { length: 1300, angle: 90 },
  { length: 2226, angle: 180 },
  { length: 2239, angle: 270 },
];

const xInit = Number(0); // начальная точка x
const yInit = Number(0); // начальная точка y

// Почему строка, а не массив?
// Почему не forEach или for(i in arr), не редьюсер?
function convert(arr) {
  let coordinates = `${xInit}, ${yInit} `; // x запятая y пробел

  for (let i = 0, x = xInit, y = yInit; i < arr.length; i++) {
    const length = arr[i].length; // Длина линии
    const angleDegrees = arr[i].angle; // Угол в градусах

    const angleRadians = angleDegrees * (Math.PI / 180); // градусы в радианы

    // Вычисление конечных координат
    // округление до 1 знака после запятой Math.round(num * 10) / 10
    // console.log(`item ${i}: x до ${x} , y до = ${y}`);
    x += Math.round((length / 10) * Math.cos(angleRadians) * 10) / 10;
    // console.log(`item ${i}, x после = ${x}`);

    y += Math.round((length / 10) * Math.sin(angleRadians) * 10) / 10;
    // console.log(`item ${i}, y после = ${y}`);

    // console.log(`следующий`);

    coordinates = `${coordinates}${x.toFixed(1)}, ${y.toFixed(1)} `;
  }

  return coordinates;
}

console.log(convert(walls));
