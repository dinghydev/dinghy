import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROBABILITY_6 = {
  _style:
    'edgeStyle=none;html=1;align=center;verticalAlign=top;endArrow=open;endSize=12;exitX=1;exitY=0.5;fillColor=#ffffff;labelBackgroundColor=none;',
  _width: 2,
  _height: 60,
}

export function Probability6(props: DiagramNodeProps) {
  return <Shape {...PROBABILITY_6} {...props} />
}
