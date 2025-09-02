import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESISTOR_ADJUSTABLE_CONTACT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.resistor,_adjustable_contact;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function ResistorAdjustableContact(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESISTOR_ADJUSTABLE_CONTACT}
      {...props}
      _style={extendStyle(RESISTOR_ADJUSTABLE_CONTACT, props)}
    />
  )
}
