import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUPERMARKET = {
  _style: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.supermarket;',
  _width: 60,
  _height: 100,
}

export function Supermarket(props: DiagramNodeProps) {
  return <Shape {...SUPERMARKET} {...props} />
}
