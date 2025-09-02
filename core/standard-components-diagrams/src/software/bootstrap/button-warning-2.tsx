import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_WARNING_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#FFBC26;strokeWidth=1;fillColor=none;fontColor=#FFBC26;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _original_width: 90,
  _original_height: 40,
}

export function ButtonWarning2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_WARNING_2}
      {...props}
      _style={extendStyle(BUTTON_WARNING_2, props)}
    />
  )
}
