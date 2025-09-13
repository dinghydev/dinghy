import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HALF_PIPE_MIXING_VESSEL = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.half_pipe_mixing_vessel;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 173,
}

export function HalfPipeMixingVessel(props: DiagramNodeProps) {
  return (
    <Shape
      {...HALF_PIPE_MIXING_VESSEL}
      {...props}
      _style={extendStyle(HALF_PIPE_MIXING_VESSEL, props)}
    />
  )
}
