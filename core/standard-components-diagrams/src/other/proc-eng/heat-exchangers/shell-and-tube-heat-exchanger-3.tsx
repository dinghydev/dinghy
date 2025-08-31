import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHELL_AND_TUBE_HEAT_EXCHANGER_3 = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.shell_and_tube_heat_exchanger_3;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function ShellAndTubeHeatExchanger3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHELL_AND_TUBE_HEAT_EXCHANGER_3}
      {...props}
      _style={extendStyle(SHELL_AND_TUBE_HEAT_EXCHANGER_3, props)}
    />
  )
}
