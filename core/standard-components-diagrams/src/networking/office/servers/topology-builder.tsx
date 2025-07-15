import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TOPOLOGY_BUILDER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.topology_builder;',
  _width: 59,
  _height: 59,
}

export function TopologyBuilder(props: DiagramNodeProps) {
  return <Shape {...TOPOLOGY_BUILDER} {...props} />
}
