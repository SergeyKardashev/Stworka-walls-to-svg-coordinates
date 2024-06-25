const xInit = Number(0); // начальная точка x
const yInit = Number(0); // начальная точка y

export function convertPoints(arr) {
  let coordinates = `${xInit}, ${yInit} `;
  for (let i = 0, x = xInit, y = yInit; i < arr.length; i++) {
    const length = arr[i].length; // Длина линии
    const angleDegrees = arr[i].angle; // Угол в градусах
    const angleRadians = angleDegrees * (Math.PI / 180); // градусы в радианы

    // Вычисление конечных координат
    // округление до 1 знака после запятой Math.round(num * 10) / 10
    x += Math.round((length / 10) * Math.cos(angleRadians) * 10) / 10;
    y += Math.round((length / 10) * Math.sin(angleRadians) * 10) / 10;
    // toFixed(1) преобразует в СТРОКУ с 1 знаком после запятой
    coordinates = `${coordinates}${x.toFixed(1)}, ${y.toFixed(1)} `;
  }

  return coordinates;
}
