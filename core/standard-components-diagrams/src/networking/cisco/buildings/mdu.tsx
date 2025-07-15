import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MDU = {
  _style:
    'shape=mxgraph.cisco.buildings.mdu;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 66,
  _height: 80,
}

export function Mdu(props: DiagramNodeProps) {
  return <Shape {...MDU} {...props} />
}
