import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEAT_EXCHANGER_FINNED_TUBES_FAN = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(finned_tubes,_fan);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function HeatExchangerFinnedTubesFan(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEAT_EXCHANGER_FINNED_TUBES_FAN}
      {...props}
      _style={extendStyle(HEAT_EXCHANGER_FINNED_TUBES_FAN, props)}
    />
  )
}
