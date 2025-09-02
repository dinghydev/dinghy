import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIGHT_CARD = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#D2D3D4;html=1;whiteSpace=wrap;fillColor=#F8F9FA;fontColor=#212529;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 180,
}

export function LightCard(props: DiagramNodeProps) {
  return (
    <Shape {...LIGHT_CARD} {...props} _style={extendStyle(LIGHT_CARD, props)} />
  )
}
