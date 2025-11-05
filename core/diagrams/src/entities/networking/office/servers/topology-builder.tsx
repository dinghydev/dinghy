import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOPOLOGY_BUILDER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.topology_builder;',
  },
  _original_width: 59,
  _original_height: 59,
}

export function TopologyBuilder(props: NodeProps) {
  return (
    <Shape
      {...TOPOLOGY_BUILDER}
      {...props}
      _style={extendStyle(TOPOLOGY_BUILDER, props)}
    />
  )
}
