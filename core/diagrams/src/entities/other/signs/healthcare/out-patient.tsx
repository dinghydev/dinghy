import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OUT_PATIENT = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.out_patient;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 56,
  _height: 99,
}

export function OutPatient(props: DiagramNodeProps) {
  return (
    <Shape
      {...OUT_PATIENT}
      {...props}
      _style={extendStyle(OUT_PATIENT, props)}
    />
  )
}
