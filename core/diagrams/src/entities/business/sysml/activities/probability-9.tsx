import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROBABILITY_9 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=center;verticalAlign=top;endArrow=open;endSize=12;exitX=1;exitY=0.7;fillColor=#ffffff;labelBackgroundColor=none;rounded=0;',
  },
  _width: 2,
  _height: 60,
}

export function Probability9(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROBABILITY_9}
      {...props}
      _style={extendStyle(PROBABILITY_9, props)}
    />
  )
}
