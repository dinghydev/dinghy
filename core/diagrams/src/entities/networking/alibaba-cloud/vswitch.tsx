import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VSWITCH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.vswitch;',
  },
  _width: 52.5,
  _height: 37.5,
}

export function Vswitch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VSWITCH)} />
}
