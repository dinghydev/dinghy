import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VALUE = {
  _style: 'fillColor=#ffff99;whiteSpace=wrap;shape=ellipse;html=1;',
  _width: 100,
  _height: 56.25,
}

export function Value(props: DiagramNodeProps) {
  return <Shape {...VALUE} {...props} />
}
