import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUMP_DIAPHRAGM = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_iso.pump_(diaphragm);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
}

export function PumpDiaphragm(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUMP_DIAPHRAGM}
      {...props}
      _style={extendStyle(PUMP_DIAPHRAGM, props)}
    />
  )
}
