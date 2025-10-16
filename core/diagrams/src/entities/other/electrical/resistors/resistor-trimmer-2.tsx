import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESISTOR_TRIMMER_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.trimmer_resistor_2;',
  },
  _width: 100,
  _height: 65.5,
}

export function ResistorTrimmer2(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESISTOR_TRIMMER_2}
      {...props}
      _style={extendStyle(RESISTOR_TRIMMER_2, props)}
    />
  )
}
