const mapping: Record<string, string> = {
  renamedpackages: 'Renamedpackage',
  products: 'product',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
