import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANNEL_ADAPTER = {
  _style:
    'strokeWidth=2;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.channel_adapter;fillColor=#9ddbef;',
  _width: 45,
  _height: 90,
}

export function ChannelAdapter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANNEL_ADAPTER}
      {...props}
      _style={extendStyle(CHANNEL_ADAPTER, props)}
    />
  )
}
