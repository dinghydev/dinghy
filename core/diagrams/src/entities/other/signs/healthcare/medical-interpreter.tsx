import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDICAL_INTERPRETER = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.medical_interpreter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 85,
}

export function MedicalInterpreter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MEDICAL_INTERPRETER)} />
}
