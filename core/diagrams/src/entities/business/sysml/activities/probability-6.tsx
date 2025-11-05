import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROBABILITY_6 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=center;verticalAlign=top;endArrow=open;endSize=12;exitX=1;exitY=0.5;fillColor=#ffffff;labelBackgroundColor=none;',
  },
  _width: 2,
  _height: 60,
}

export function Probability6(props: NodeProps) {
  return (
    <Shape
      {...PROBABILITY_6}
      {...props}
      _style={extendStyle(PROBABILITY_6, props)}
    />
  )
}
