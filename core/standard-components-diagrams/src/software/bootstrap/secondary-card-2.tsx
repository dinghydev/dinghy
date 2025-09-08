import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECONDARY_CARD_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#6C767D;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#6C767D;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 180,
}

export function SecondaryCard2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECONDARY_CARD_2}
      {...props}
      _style={extendStyle(SECONDARY_CARD_2, props)}
    />
  )
}
