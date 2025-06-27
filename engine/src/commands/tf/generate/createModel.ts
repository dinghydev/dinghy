export function createModel(_args: any, elements: any[]) {
  const region = elements.pop()! as any
  region.children = elements
  return { tag: 'AwsCloud', children: [region] }
}
