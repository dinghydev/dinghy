import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOUBLE_PIPE_HEAT_EXCHANGER = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.double_pipe_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 90,
  _height: 50,
}

export function DoublePipeHeatExchanger(props: DiagramNodeProps) {
  return <Shape {...DOUBLE_PIPE_HEAT_EXCHANGER} {...props} />
}
