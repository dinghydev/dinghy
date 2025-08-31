import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUMP_CENTRIFUGAL = {
  _style:
    'shape=mxgraph.pid.pumps_-_iso.pump_(centrifugal);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function PumpCentrifugal(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUMP_CENTRIFUGAL}
      {...props}
      _style={extendStyle(PUMP_CENTRIFUGAL, props)}
    />
  )
}
