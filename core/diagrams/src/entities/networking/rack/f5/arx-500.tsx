import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARX_500 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.arx_500;',
  },
  _width: 168,
  _height: 20,
}

export function Arx500(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARX_500)} />
}
