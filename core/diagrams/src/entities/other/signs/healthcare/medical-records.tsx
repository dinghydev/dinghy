import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEDICAL_RECORDS = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.medical_records;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function MedicalRecords(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDICAL_RECORDS}
      {...props}
      _style={extendStyle(MEDICAL_RECORDS, props)}
    />
  )
}
