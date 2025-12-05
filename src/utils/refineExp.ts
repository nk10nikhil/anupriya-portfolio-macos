export function refineExp(expression: string | number): string {
  // Convert to string if it's a number
  const expr = String(expression);
  // Replace calculator symbols with JavaScript operators
  return expr.replace(/×/g, "*").replace(/÷/g, "/");
}
