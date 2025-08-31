import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEAT_EXCHANGER_FINNED_TUBES = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(finned_tubes);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 30,
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
