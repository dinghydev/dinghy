import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESISTOR_ADJUSTABLE_CONTACT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.resistor,_adjustable_contact;',
  },
  _width: 100,
  _height: 40,
}

export function ResistorAdjustableContact(props: NodeProps) {
  return (
    <Shape
      {...RESISTOR_ADJUSTABLE_CONTACT}
      {...props}
      _style={extendStyle(RESISTOR_ADJUSTABLE_CONTACT, props)}
    />
  )
}
