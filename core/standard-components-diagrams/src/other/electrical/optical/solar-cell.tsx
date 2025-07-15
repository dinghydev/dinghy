import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOLAR_CELL = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.solar_cell;pointerEvents=1;',
  _width: 100,
  _height: 70,
}

export function SolarCell(props: DiagramNodeProps) {
  return <Shape {...SOLAR_CELL} {...props} />
}
