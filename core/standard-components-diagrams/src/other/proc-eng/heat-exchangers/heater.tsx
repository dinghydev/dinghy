import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEATER = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.heater;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function Heater(props: DiagramNodeProps) {
  return <Shape {...HEATER} {...props} _style={extendStyle(HEATER, props)} />
}
