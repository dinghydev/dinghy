import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMALL_DROPDOWN_BUTTON = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#505050;strokeWidth=1;fillColor=#ffffff;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=12;spacing=15;',
  _width: 0,
  _height: 30,
}

export function SmallDropdownButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMALL_DROPDOWN_BUTTON}
      {...props}
      _style={extendStyle(SMALL_DROPDOWN_BUTTON, props)}
    />
  )
}
