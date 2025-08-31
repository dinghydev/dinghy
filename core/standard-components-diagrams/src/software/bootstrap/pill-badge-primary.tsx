import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PILL_BADGE_PRIMARY = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=none;strokeWidth=1;fillColor=#0085FC;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=10;',
  _width: 70,
  _height: 20,
}

export function PillBadgePrimary(props: DiagramNodeProps) {
  return (
    <Shape
      {...PILL_BADGE_PRIMARY}
      {...props}
      _style={extendStyle(PILL_BADGE_PRIMARY, props)}
    />
  )
}
