import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JACKETED_MIXING_VESSEL = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.jacketed_mixing_vessel;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 174,
}

export function JacketedMixingVessel(props: DiagramNodeProps) {
  return (
    <Shape
      {...JACKETED_MIXING_VESSEL}
      {...props}
      _style={extendStyle(JACKETED_MIXING_VESSEL, props)}
    />
  )
}
