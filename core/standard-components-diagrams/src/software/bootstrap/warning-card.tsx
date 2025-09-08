import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WARNING_CARD = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#D89F20;html=1;whiteSpace=wrap;fillColor=#FFBC26;fontColor=#ffffff;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 180,
}

export function WarningCard(props: DiagramNodeProps) {
  return (
    <Shape
      {...WARNING_CARD}
      {...props}
      _style={extendStyle(WARNING_CARD, props)}
    />
  )
}
