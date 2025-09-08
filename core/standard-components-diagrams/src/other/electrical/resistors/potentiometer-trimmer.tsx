import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POTENTIOMETER_TRIMMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.trimmer_pot_1;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function PotentiometerTrimmer(props: DiagramNodeProps) {
  return (
    <Shape
      {...POTENTIOMETER_TRIMMER}
      {...props}
      _style={extendStyle(POTENTIOMETER_TRIMMER, props)}
    />
  )
}
