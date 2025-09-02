import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#2D3338;html=1;whiteSpace=wrap;fillColor=#868E96;fontColor=#ffffff;verticalAlign=middle;align=center;spacing=20;fontSize=60;',
  },
  _original_width: 0,
  _original_height: 280,
}

export function Card4(props: DiagramNodeProps) {
  return <Shape {...CARD_4} {...props} _style={extendStyle(CARD_4, props)} />
}
