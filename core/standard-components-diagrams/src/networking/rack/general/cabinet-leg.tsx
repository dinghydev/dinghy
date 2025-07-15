import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CABINET_LEG = {
  _style:
    'shape=mxgraph.rackGeneral.cabinetLeg;html=1;shadow=0;dashed=0;fillColor=#444444;strokeColor=#444444;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  _width: 50,
  _height: 50,
}

export function CabinetLeg(props: DiagramNodeProps) {
  return <Shape {...CABINET_LEG} {...props} />
}
