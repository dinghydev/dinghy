import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROPDOWN_BUTTON_7 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#1CA5B8;fontColor=#ffffff;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=14;spacingLeft=10;',
  },
  _original_width: 0,
  _original_height: 153,
}

export function DropdownButton7(props: DiagramNodeProps) {
  return (
    <Shape
      {...DROPDOWN_BUTTON_7}
      {...props}
      _style={extendStyle(DROPDOWN_BUTTON_7, props)}
    />
  )
}
