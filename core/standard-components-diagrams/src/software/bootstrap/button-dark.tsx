import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_DARK = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#343A40;fontColor=#ffffff;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _original_width: 60,
  _original_height: 40,
}

export function ButtonDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_DARK}
      {...props}
      _style={extendStyle(BUTTON_DARK, props)}
    />
  )
}
