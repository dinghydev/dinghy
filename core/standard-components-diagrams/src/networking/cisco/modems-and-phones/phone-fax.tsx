import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHONE_FAX = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.phone-fax;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 106,
  _original_height: 46,
}

export function PhoneFax(props: DiagramNodeProps) {
  return (
    <Shape {...PHONE_FAX} {...props} _style={extendStyle(PHONE_FAX, props)} />
  )
}
