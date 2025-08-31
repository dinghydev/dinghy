import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDICAL_RECORDS = {
  _style:
    'shape=mxgraph.signs.healthcare.medical_records;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
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
