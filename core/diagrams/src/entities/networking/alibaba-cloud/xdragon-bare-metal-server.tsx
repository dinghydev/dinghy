import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XDRAGON_BARE_METAL_SERVER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.xdragon_bare_metal_server;',
  },
  _original_width: 49.199999999999996,
  _original_height: 47.7,
}

export function XdragonBareMetalServer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, XDRAGON_BARE_METAL_SERVER)} />
  )
}
