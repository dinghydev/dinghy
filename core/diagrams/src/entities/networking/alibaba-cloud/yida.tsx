import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YIDA = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.yida;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function Yida(props: NodeProps) {
  return <Shape {...YIDA} {...props} _style={extendStyle(YIDA, props)} />
}
