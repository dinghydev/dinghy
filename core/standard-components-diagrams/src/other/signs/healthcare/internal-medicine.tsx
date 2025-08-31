import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNAL_MEDICINE = {
  _style:
    'shape=mxgraph.signs.healthcare.internal_medicine;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 71,
  _height: 98,
}

export function InternalMedicine(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNAL_MEDICINE}
      {...props}
      _style={extendStyle(INTERNAL_MEDICINE, props)}
    />
  )
}
