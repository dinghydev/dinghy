import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NEXUS_2000_FABRIC_EXTENDER = {
  _style:
    'shape=mxgraph.cisco.misc.nexus_2000_fabric_extender;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 101,
  _height: 50,
}

export function Nexus2000FabricExtender(props: DiagramNodeProps) {
  return <Shape {...NEXUS_2000_FABRIC_EXTENDER} {...props} />
}
