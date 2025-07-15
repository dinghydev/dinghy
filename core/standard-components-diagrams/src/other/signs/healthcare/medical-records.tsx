import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDICAL_RECORDS = {
  _style:
    'shape=mxgraph.signs.healthcare.medical_records;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 98,
}

export function MedicalRecords(props: DiagramNodeProps) {
  return <Shape {...MEDICAL_RECORDS} {...props} />
}
