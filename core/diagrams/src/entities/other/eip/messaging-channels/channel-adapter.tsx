import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANNEL_ADAPTER = {
  _style: {
    entity:
      'strokeWidth=2;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.channel_adapter;fillColor=#9ddbef;',
  },
  _width: 45,
  _height: 90,
}

export function ChannelAdapter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHANNEL_ADAPTER)} />
}
