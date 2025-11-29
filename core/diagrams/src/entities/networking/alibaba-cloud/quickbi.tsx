import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUICKBI = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.quickbi;',
  },
  _original_width: 47.7,
  _original_height: 48,
}

export function Quickbi(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, QUICKBI)} />
}
