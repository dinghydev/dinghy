import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STATE_6 = {
  _style:
    'html=1;align=center;verticalAlign=middle;rounded=1;absoluteArcSize=1;arcSize=10;dashed=1;whiteSpace=wrap;',
  _width: 140,
  _height: 40,
}

export function State6(props: DiagramNodeProps) {
  return <Shape {...STATE_6} {...props} />
}
