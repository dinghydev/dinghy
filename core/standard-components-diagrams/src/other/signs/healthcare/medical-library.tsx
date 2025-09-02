import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDICAL_LIBRARY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.medical_library;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function MedicalLibrary(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDICAL_LIBRARY}
      {...props}
      _style={extendStyle(MEDICAL_LIBRARY, props)}
    />
  )
}
