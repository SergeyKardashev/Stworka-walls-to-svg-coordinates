import { wallsData } from './wallsData.js';
import { convertPoints } from './convertPoints.js';
import { updatePoints } from './updatePoints.js';

// Пример использования:
const polygon1 = document.getElementById('svg-polygon');
const newPoints = convertPoints(wallsData);
updatePoints(polygon1, newPoints);
