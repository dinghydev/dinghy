import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROBABILITY_5 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=center;verticalAlign=bottom;endArrow=open;endSize=12;exitX=1;exitY=0.5;fillColor=#ffffff;labelBackgroundColor=none;',
  },
  _original_width: 1,
  _original_height: 60,
}

export function Probability5(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROBABILITY_5}
      {...props}
      _style={extendStyle(PROBABILITY_5, props)}
    />
  )
}
