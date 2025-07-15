import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROBABILITY_9 = {
  _style:
    'edgeStyle=none;html=1;align=center;verticalAlign=top;endArrow=open;endSize=12;exitX=1;exitY=0.7;fillColor=#ffffff;labelBackgroundColor=none;rounded=0;',
  _width: 2,
  _height: 60,
}

export function Probability9(props: DiagramNodeProps) {
  return <Shape {...PROBABILITY_9} {...props} />
}
