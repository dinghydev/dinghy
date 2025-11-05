import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARX_5000 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.arx_5000;',
  },
  _width: 168,
  _height: 20,
}

export function Arx5000(props: NodeProps) {
  return (
    <Shape {...ARX_5000} {...props} _style={extendStyle(ARX_5000, props)} />
  )
}
