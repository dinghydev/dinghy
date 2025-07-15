import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NEXUS_5000 = {
  _style:
    'shape=mxgraph.cisco.misc.nexus_5000;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 101,
  _height: 50,
}

export function Nexus5000(props: DiagramNodeProps) {
  return <Shape {...NEXUS_5000} {...props} />
}
