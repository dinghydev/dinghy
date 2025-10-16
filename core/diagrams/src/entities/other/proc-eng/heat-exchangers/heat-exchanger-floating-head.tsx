import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HEAT_EXCHANGER_FLOATING_HEAD = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(floating_head);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 30,
}

export function HeatExchangerFloatingHead(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEAT_EXCHANGER_FLOATING_HEAD}
      {...props}
      _style={extendStyle(HEAT_EXCHANGER_FLOATING_HEAD, props)}
    />
  )
}
