import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIVINGLINK = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.livinglink;',
  },
  _original_width: 43.8,
  _original_height: 50.699999999999996,
}

export function Livinglink(props: NodeProps) {
  return (
    <Shape {...LIVINGLINK} {...props} _style={extendStyle(LIVINGLINK, props)} />
  )
}
