import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MIRROR_WITNESS_NODE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mirror_witness_node;',
  },
  _original_width: 60,
  _original_height: 59,
}

export function DatabaseMirrorWitnessNode(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DATABASE_MIRROR_WITNESS_NODE)}
    />
  )
}
