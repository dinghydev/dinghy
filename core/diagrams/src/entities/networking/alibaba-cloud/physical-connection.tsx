import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHYSICAL_CONNECTION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.physical_connection;',
  },
  _original_width: 54.300000000000004,
  _original_height: 40.5,
}

export function PhysicalConnection(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PHYSICAL_CONNECTION)} />
}
