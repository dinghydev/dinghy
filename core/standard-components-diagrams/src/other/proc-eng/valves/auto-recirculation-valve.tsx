import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTO_RECIRCULATION_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.autoRecircValve',
  _width: 100,
  _height: 60,
}

export function AutoRecirculationValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTO_RECIRCULATION_VALVE}
      {...props}
      _style={extendStyle(AUTO_RECIRCULATION_VALVE, props)}
    />
  )
}
