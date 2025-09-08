import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOUBLE_PIPE_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.double_pipe_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 90,
  _original_height: 50,
}

export function DoublePipeHeatExchanger(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_PIPE_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(DOUBLE_PIPE_HEAT_EXCHANGER, props)}
    />
  )
}
