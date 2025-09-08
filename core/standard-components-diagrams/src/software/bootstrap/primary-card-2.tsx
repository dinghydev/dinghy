import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRIMARY_CARD_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#0085FC;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#0085FC;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 180,
}

export function PrimaryCard2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIMARY_CARD_2}
      {...props}
      _style={extendStyle(PRIMARY_CARD_2, props)}
    />
  )
}
