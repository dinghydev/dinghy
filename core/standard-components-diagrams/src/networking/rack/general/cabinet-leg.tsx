import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CABINET_LEG = {
  _style: {
    entity:
      'shape=mxgraph.rackGeneral.cabinetLeg;html=1;shadow=0;dashed=0;fillColor=#444444;strokeColor=#444444;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  },
  _width: 60,
  _height: 60,
}

export function CabinetLeg(props: DiagramNodeProps) {
  return (
    <Shape
      {...CABINET_LEG}
      {...props}
      _style={extendStyle(CABINET_LEG, props)}
    />
  )
}
