import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DROPDOWN_BUTTON_8 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#FFBC26;fontColor=#000000;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=14;spacingLeft=10;',
  },
  _original_width: 0,
  _original_height: 153,
}

export function DropdownButton8(props: DiagramNodeProps) {
  return (
    <Shape
      {...DROPDOWN_BUTTON_8}
      {...props}
      _style={extendStyle(DROPDOWN_BUTTON_8, props)}
    />
  )
}
