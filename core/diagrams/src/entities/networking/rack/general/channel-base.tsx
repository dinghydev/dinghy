import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHANNEL_BASE = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rackGeneral.channelBase;',
  },
  _width: 200,
  _height: 30,
}

export function ChannelBase(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANNEL_BASE}
      {...props}
      _style={extendStyle(CHANNEL_BASE, props)}
    />
  )
}
