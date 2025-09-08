import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEDICAL_INTERPRETER = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.medical_interpreter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 85,
}

export function MedicalInterpreter(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDICAL_INTERPRETER}
      {...props}
      _style={extendStyle(MEDICAL_INTERPRETER, props)}
    />
  )
}
