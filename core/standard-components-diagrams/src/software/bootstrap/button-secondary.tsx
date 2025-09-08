import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_SECONDARY = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#6C767D;fontColor=#FFFFFF;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function ButtonSecondary(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_SECONDARY}
      {...props}
      _style={extendStyle(BUTTON_SECONDARY, props)}
    />
  )
}
