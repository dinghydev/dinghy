import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STRUCTURED_ACTIVITY_NODE = {
  _style:
    'dashed=1;rounded=1;absoluteArcSize=1;arcSize=20;html=1;verticalAlign=top;align=left;spacingTop=5;spacingLeft=10;whiteSpace=wrap;',
  _width: 200,
  _height: 100,
}

export function StructuredActivityNode(props: DiagramNodeProps) {
  return <Shape {...STRUCTURED_ACTIVITY_NODE} {...props} />
}
