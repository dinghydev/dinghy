import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROPERTY = {
  _style: 'shape=rect;html=1;strokeWidth=2;whiteSpace=wrap;recursiveResize=0;',
  _width: 0,
  _height: 120,
}

export function Property(props: DiagramNodeProps) {
  return <Shape {...PROPERTY} {...props} />
}
