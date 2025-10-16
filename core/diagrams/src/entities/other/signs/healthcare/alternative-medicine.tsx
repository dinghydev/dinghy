import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALTERNATIVE_MEDICINE = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.alternative_medicine;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 95,
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
