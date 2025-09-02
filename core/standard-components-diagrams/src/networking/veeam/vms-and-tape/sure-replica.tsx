import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SURE_REPLICA = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.sure_replica;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function SureReplica(props: DiagramNodeProps) {
  return (
    <Shape
      {...SURE_REPLICA}
      {...props}
      _style={extendStyle(SURE_REPLICA, props)}
    />
  )
}
