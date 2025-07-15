import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DARK_CARD_2 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#6C767D;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#212529;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  _width: 0,
  _height: 180,
}

export function DarkCard2(props: DiagramNodeProps) {
  return <Shape {...DARK_CARD_2} {...props} />
}
