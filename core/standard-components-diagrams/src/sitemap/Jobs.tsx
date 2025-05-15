import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JOBS = {
  _color: { color: '#0079D6', fill: true },
  _border: 1,
  _shape: 'mxgraph.sitemap.jobs',
}

export function Jobs(props: DiagramNodeProps) {
  return <Shape {...JOBS} {...props} />
}
