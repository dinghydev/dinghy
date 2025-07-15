import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PILL_BADGE_INFO = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=none;strokeWidth=1;fillColor=#1CA5B8;fontColor=#ffffff;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=10;',
  _width: 45,
  _height: 20,
}

export function PillBadgeInfo(props: DiagramNodeProps) {
  return <Shape {...PILL_BADGE_INFO} {...props} />
}
