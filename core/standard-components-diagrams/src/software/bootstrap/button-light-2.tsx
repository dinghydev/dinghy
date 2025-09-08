import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_LIGHT_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#F8F9FA;strokeWidth=1;fillColor=none;fontColor=#F8F9FA;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _original_width: 60,
  _original_height: 40,
}

export function ButtonLight2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_LIGHT_2}
      {...props}
      _style={extendStyle(BUTTON_LIGHT_2, props)}
    />
  )
}
