import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROBABILITY_9 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=center;verticalAlign=top;endArrow=open;endSize=12;exitX=1;exitY=0.7;fillColor=#ffffff;labelBackgroundColor=none;rounded=0;',
  },
  _original_width: 2,
  _original_height: 60,
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
