import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESISTOR_TRIMMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.trimmer_resistor_1;',
  },
  _width: 100,
  _height: 65.5,
}

export function ResistorTrimmer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RESISTOR_TRIMMER)} />
}
