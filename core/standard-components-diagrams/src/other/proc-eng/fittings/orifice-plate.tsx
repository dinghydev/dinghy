import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORIFICE_PLATE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.orifice_plate2;',
  },
  _width: 40,
  _height: 140,
}

export function OrificePlate(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORIFICE_PLATE}
      {...props}
      _style={extendStyle(ORIFICE_PLATE, props)}
    />
  )
}
