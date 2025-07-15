import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DANGER_CARD_2 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DB2843;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#DB2843;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  _width: 0,
  _height: 180,
}

export function DangerCard2(props: DiagramNodeProps) {
  return <Shape {...DANGER_CARD_2} {...props} />
}
