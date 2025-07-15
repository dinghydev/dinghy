import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PILL_BADGE_DANGER = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=none;strokeWidth=1;fillColor=#DB2843;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=10;',
  _width: 65,
  _height: 20,
}

export function PillBadgeDanger(props: DiagramNodeProps) {
  return <Shape {...PILL_BADGE_DANGER} {...props} />
}
