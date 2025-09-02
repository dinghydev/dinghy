import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROTARY_DRUM_DRIER_TUMBLING_DRIER = {
  _style: {
    entity:
      'shape=mxgraph.pid.driers.rotary_drum_drier,_tumbling_drier;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 140,
}

export function RotaryDrumDrierTumblingDrier(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROTARY_DRUM_DRIER_TUMBLING_DRIER}
      {...props}
      _style={extendStyle(ROTARY_DRUM_DRIER_TUMBLING_DRIER, props)}
    />
  )
}
