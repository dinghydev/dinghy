import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOUBLE_PIPE_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.double_pipe_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 90,
  _height: 50,
}

export function DoublePipeHeatExchanger(props: NodeProps) {
  return (
    <Shape
      {...DOUBLE_PIPE_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(DOUBLE_PIPE_HEAT_EXCHANGER, props)}
    />
  )
}
