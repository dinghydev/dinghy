import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROPDOWN_BUTTON = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#6C767D;fontColor=#ffffff;whiteSpace=wrap;align=right;verticalAlign=middle;fontStyle=0;fontSize=14;spacingRight=20;',
  },
  _width: 0,
  _height: 40,
}

export function DropdownButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...DROPDOWN_BUTTON}
      {...props}
      _style={extendStyle(DROPDOWN_BUTTON, props)}
    />
  )
}
