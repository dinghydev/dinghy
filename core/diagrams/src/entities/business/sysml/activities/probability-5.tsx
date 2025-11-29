import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROBABILITY_5 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=center;verticalAlign=bottom;endArrow=open;endSize=12;exitX=1;exitY=0.5;fillColor=#ffffff;labelBackgroundColor=none;',
  },
  _width: 1,
  _height: 60,
}

export function Probability5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROBABILITY_5)} />
}
