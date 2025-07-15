import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXPANSION = {
  _style:
    'html=1;dashed=1;rounded=1;absoluteArcSize=1;arcSize=20;verticalAlign=top;align=left;spacingTop=20;spacingLeft=20;whiteSpace=wrap;',
  _width: 300,
  _height: 300,
}

export function Expansion(props: DiagramNodeProps) {
  return <Shape {...EXPANSION} {...props} />
}
