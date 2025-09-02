import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_GROUP_6 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#868E96;fontColor=#DEE2E6;verticalAlign=middle;align=center;spacing=10;spacingBottom=0;fontSize=14;spacingTop=0;',
  },
  _original_width: 5,
  _original_height: 600,
}

export function CardGroup6(props: DiagramNodeProps) {
  return (
    <Shape
      {...CARD_GROUP_6}
      {...props}
      _style={extendStyle(CARD_GROUP_6, props)}
    />
  )
}
