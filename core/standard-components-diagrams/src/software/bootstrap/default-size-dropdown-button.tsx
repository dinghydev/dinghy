import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_SIZE_DROPDOWN_BUTTON = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#505050;strokeWidth=1;fillColor=#ffffff;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=14;spacingRight=0;spacing=17;',
  },
  _width: 0,
  _height: 40,
}

export function DefaultSizeDropdownButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFAULT_SIZE_DROPDOWN_BUTTON}
      {...props}
      _style={extendStyle(DEFAULT_SIZE_DROPDOWN_BUTTON, props)}
    />
  )
}
