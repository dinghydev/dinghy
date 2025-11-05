import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSPORT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.transport;',
  },
  _width: 38,
  _height: 23,
}

export function Transport(props: NodeProps) {
  return (
    <Shape {...TRANSPORT} {...props} _style={extendStyle(TRANSPORT, props)} />
  )
}
