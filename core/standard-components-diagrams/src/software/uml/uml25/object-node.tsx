import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBJECT_NODE = {
  _style:
    'html=1;align=center;verticalAlign=middle;rounded=0;absoluteArcSize=1;arcSize=10;dashed=0;whiteSpace=wrap;',
  _width: 0,
  _height: 90,
}

export function ObjectNode(props: DiagramNodeProps) {
  return <Shape {...OBJECT_NODE} {...props} />
}
