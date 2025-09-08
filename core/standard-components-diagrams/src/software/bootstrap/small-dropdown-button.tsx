import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMALL_DROPDOWN_BUTTON = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#505050;strokeWidth=1;fillColor=#ffffff;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=12;spacing=15;',
  },
  _original_width: 0,
  _original_height: 30,
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
