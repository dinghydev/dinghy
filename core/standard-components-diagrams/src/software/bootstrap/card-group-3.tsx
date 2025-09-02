import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_GROUP_3 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#000000;verticalAlign=top;align=left;spacing=30;spacingBottom=0;fontSize=14;spacingTop=0;',
  },
  _original_width: 1,
  _original_height: 600,
}

export function CardGroup3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CARD_GROUP_3}
      {...props}
      _style={extendStyle(CARD_GROUP_3, props)}
    />
  )
}
