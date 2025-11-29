import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHONE_FAX = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.phone-fax;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 106,
  _height: 46,
}

export function PhoneFax(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PHONE_FAX)} />
}
