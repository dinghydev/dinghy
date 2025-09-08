import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MINIAPPDEV = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.miniappdev;',
  },
  _original_width: 49.199999999999996,
  _original_height: 35.699999999999996,
}

export function Miniappdev(props: DiagramNodeProps) {
  return (
    <Shape {...MINIAPPDEV} {...props} _style={extendStyle(MINIAPPDEV, props)} />
  )
}
