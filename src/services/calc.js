const sum = (p1, p2) => p1 + p2;
const sub = (p1, p2) => p1 - p2;
const mult = (p1, p2) => p1 * p2;
const div = (p1, p2) => (p2 === 0 ? "Não é possível divisão por 0!" : p1 / p2);

export const calc = { sum, sub, mult, div };
