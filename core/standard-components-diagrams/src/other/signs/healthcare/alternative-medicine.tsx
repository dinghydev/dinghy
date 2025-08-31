import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALTERNATIVE_MEDICINE = {
  _style:
    'shape=mxgraph.signs.healthcare.alternative_medicine;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 95,
}

export function AlternativeMedicine(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALTERNATIVE_MEDICINE}
      {...props}
      _style={extendStyle(ALTERNATIVE_MEDICINE, props)}
    />
  )
}
