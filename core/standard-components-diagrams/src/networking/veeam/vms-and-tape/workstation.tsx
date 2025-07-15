import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKSTATION = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.workstation;',
  _width: 76.4,
  _height: 51.2,
}

export function Workstation(props: DiagramNodeProps) {
  return <Shape {...WORKSTATION} {...props} />
}
