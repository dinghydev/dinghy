import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONDITION = {
  _style:
    'rhombus;whiteSpace=wrap;html=1;fontColor=#000000;fillColor=#ffffc0;strokeColor=#ff0000;',
  _width: 0,
  _height: 100,
}

export function Condition(props: DiagramNodeProps) {
  return <Shape {...CONDITION} {...props} />
}
