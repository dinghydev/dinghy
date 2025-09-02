import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOLAR_CELL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.solar_cell;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function SolarCell(props: DiagramNodeProps) {
  return (
    <Shape {...SOLAR_CELL} {...props} _style={extendStyle(SOLAR_CELL, props)} />
  )
}
