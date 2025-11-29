import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANTIBOT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.antibot;',
  },
  _original_width: 55.5,
  _original_height: 49.5,
}

export function Antibot(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANTIBOT)} />
}
