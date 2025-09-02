import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WARNING_CARD_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#FFBC26;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#FFBC26;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 180,
}

export function WarningCard2(props: DiagramNodeProps) {
  return (
    <Shape
      {...WARNING_CARD_2}
      {...props}
      _style={extendStyle(WARNING_CARD_2, props)}
    />
  )
}
