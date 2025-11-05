import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SNAPSHOT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.snapshot;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 73.5,
}

export function Snapshot(props: NodeProps) {
  return (
    <Shape {...SNAPSHOT} {...props} _style={extendStyle(SNAPSHOT, props)} />
  )
}
