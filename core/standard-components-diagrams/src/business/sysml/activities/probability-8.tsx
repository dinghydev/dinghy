import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROBABILITY_8 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=center;verticalAlign=bottom;endArrow=open;endSize=12;exitX=1;exitY=0.3;fillColor=#ffffff;labelBackgroundColor=none;rounded=0;',
  },
  _original_width: 1,
  _original_height: 60,
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
