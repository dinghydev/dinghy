import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIMARY_CARD = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#0071D5;html=1;whiteSpace=wrap;fillColor=#0085FC;fontColor=#ffffff;verticalAlign=bottom;align=left;spacing=20;spacingBottom=0;fontSize=14;',
  _width: 0,
  _height: 180,
}

export function PrimaryCard(props: DiagramNodeProps) {
  return <Shape {...PRIMARY_CARD} {...props} />
}
