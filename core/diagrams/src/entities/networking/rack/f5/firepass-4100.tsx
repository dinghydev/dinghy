import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIREPASS_4100 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.firepass_4100;',
  },
  _width: 168,
  _height: 40,
}

export function Firepass4100(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIREPASS_4100)} />
}
