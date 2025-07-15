import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROTARY_DRUM_DRIER_TUMBLING_DRIER = {
  _style:
    'shape=mxgraph.pid.driers.rotary_drum_drier,_tumbling_drier;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 140,
}

export function RotaryDrumDrierTumblingDrier(props: DiagramNodeProps) {
  return <Shape {...ROTARY_DRUM_DRIER_TUMBLING_DRIER} {...props} />
}
