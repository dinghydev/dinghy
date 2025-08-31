import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANNEL_PURGER = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.channel_purger;fillColor=#c0f5a9',
  },
  _width: 150,
  _height: 90,
}

export function ChannelPurger(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANNEL_PURGER}
      {...props}
      _style={extendStyle(CHANNEL_PURGER, props)}
    />
  )
}
