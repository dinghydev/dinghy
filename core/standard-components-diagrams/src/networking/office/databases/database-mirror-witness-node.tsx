import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MIRROR_WITNESS_NODE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mirror_witness_node;',
  _width: 60,
  _height: 59,
}

export function DatabaseMirrorWitnessNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MIRROR_WITNESS_NODE}
      {...props}
      _style={extendStyle(DATABASE_MIRROR_WITNESS_NODE, props)}
    />
  )
}
