import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POSTGRESQL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.postgresql;',
  },
  _original_width: 48,
  _original_height: 47.7,
}

export function Postgresql(props: NodeProps) {
  return (
    <Shape {...POSTGRESQL} {...props} _style={extendStyle(POSTGRESQL, props)} />
  )
}
