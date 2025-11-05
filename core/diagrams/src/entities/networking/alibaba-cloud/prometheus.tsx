import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROMETHEUS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.prometheus;',
  },
  _original_width: 48.9,
  _original_height: 48.9,
}

export function Prometheus(props: NodeProps) {
  return (
    <Shape {...PROMETHEUS} {...props} _style={extendStyle(PROMETHEUS, props)} />
  )
}
