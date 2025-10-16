import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DROPDOWN_BUTTON_5 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#33A64C;fontColor=#ffffff;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=14;spacingLeft=10;',
  },
  _width: 0,
  _height: 153,
}

export function DropdownButton5(props: DiagramNodeProps) {
  return (
    <Shape
      {...DROPDOWN_BUTTON_5}
      {...props}
      _style={extendStyle(DROPDOWN_BUTTON_5, props)}
    />
  )
}
