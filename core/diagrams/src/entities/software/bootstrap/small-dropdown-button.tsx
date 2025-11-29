import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SMALL_DROPDOWN_BUTTON = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#505050;strokeWidth=1;fillColor=#ffffff;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=12;spacing=15;',
  },
  _width: 0,
  _height: 30,
}

export function SmallDropdownButton(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SMALL_DROPDOWN_BUTTON)} />
}
