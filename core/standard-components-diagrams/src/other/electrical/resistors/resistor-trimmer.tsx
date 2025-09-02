import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESISTOR_TRIMMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.trimmer_resistor_1;',
  },
  _original_width: 100,
  _original_height: 65.5,
}

export function ResistorTrimmer(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESISTOR_TRIMMER}
      {...props}
      _style={extendStyle(RESISTOR_TRIMMER, props)}
    />
  )
}
