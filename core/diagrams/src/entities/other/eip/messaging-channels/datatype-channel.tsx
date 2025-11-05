import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATATYPE_CHANNEL = {
  _style: {
    entity:
      'strokeWidth=1;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.dataChannel;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  },
  _width: 100,
  _height: 20,
}

export function DatatypeChannel(props: NodeProps) {
  return (
    <Shape
      {...DATATYPE_CHANNEL}
      {...props}
      _style={extendStyle(DATATYPE_CHANNEL, props)}
    />
  )
}
