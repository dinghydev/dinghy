import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLATE_AND_FRAME_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.plate_and_frame_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 120,
}

export function PlateAndFrameHeatExchanger(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLATE_AND_FRAME_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(PLATE_AND_FRAME_HEAT_EXCHANGER, props)}
    />
  )
}
