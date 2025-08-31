import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROBABILITY_8 = {
  _style:
    'edgeStyle=none;html=1;align=center;verticalAlign=bottom;endArrow=open;endSize=12;exitX=1;exitY=0.3;fillColor=#ffffff;labelBackgroundColor=none;rounded=0;',
  _width: 1,
  _height: 60,
}

export function Probability8(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROBABILITY_8}
      {...props}
      _style={extendStyle(PROBABILITY_8, props)}
    />
  )
}
