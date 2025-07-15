import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HIERARCHY = {
  _style: 'rounded=1;absoluteArcSize=1;html=1;arcSize=10;',
  _width: 0,
  _height: 100,
}

export function Hierarchy(props: DiagramNodeProps) {
  return <Shape {...HIERARCHY} {...props} />
}
