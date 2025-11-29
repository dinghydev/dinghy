import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHELL_AND_TUBE_HEAT_EXCHANGER_3 = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.shell_and_tube_heat_exchanger_3;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ShellAndTubeHeatExchanger3(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SHELL_AND_TUBE_HEAT_EXCHANGER_3)}
    />
  )
}
