import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIREPASS_1200 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.firepass_1200;',
  },
  _width: 168,
  _height: 20,
}

export function Firepass1200(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIREPASS_1200)} />
}
