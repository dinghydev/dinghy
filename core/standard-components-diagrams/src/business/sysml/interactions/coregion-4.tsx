import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COREGION_4 = {
  _style:
    'edgeStyle=none;html=1;dashed=1;endArrow=none;startArrow=open;verticalAlign=bottom;startSize=12;rounded=0;',
  _width: 7,
  _height: 220,
}

export function Coregion4(props: DiagramNodeProps) {
  return <Shape {...COREGION_4} {...props} />
}
