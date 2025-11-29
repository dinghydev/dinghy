import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DROPDOWN_BUTTON_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#006AC9;fontColor=#ffffff;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=14;spacingLeft=10;',
  },
  _width: 0,
  _height: 153,
}

export function DropdownButton4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DROPDOWN_BUTTON_4)} />
}
