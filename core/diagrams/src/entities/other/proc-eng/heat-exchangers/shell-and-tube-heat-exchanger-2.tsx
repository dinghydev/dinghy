import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHELL_AND_TUBE_HEAT_EXCHANGER_2 = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.shell_and_tube_heat_exchanger_2;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ShellAndTubeHeatExchanger2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHELL_AND_TUBE_HEAT_EXCHANGER_2}
      {...props}
      _style={extendStyle(SHELL_AND_TUBE_HEAT_EXCHANGER_2, props)}
    />
  )
}
