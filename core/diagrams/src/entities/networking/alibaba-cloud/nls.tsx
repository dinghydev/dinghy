import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NLS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nls;',
  },
  _original_width: 54.900000000000006,
  _original_height: 49.199999999999996,
}

export function Nls(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NLS)} />
}
