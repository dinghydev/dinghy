import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HEAT_EXCHANGER_FINNED_TUBES = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(finned_tubes);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function HeatExchangerFinnedTubes(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEAT_EXCHANGER_FINNED_TUBES}
      {...props}
      _style={extendStyle(HEAT_EXCHANGER_FINNED_TUBES, props)}
    />
  )
}
