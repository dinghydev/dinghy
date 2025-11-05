import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ESIGN = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.esign;',
  },
  _original_width: 41.699999999999996,
  _original_height: 45.9,
}

export function Esign(props: NodeProps) {
  return <Shape {...ESIGN} {...props} _style={extendStyle(ESIGN, props)} />
}
