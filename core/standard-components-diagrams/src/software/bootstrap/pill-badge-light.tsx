import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PILL_BADGE_LIGHT = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=none;strokeWidth=1;fillColor=#F8F9FA;fontColor=#000000;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=10;',
  },
  _width: 55,
  _height: 20,
}

export function PillBadgeLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...PILL_BADGE_LIGHT}
      {...props}
      _style={extendStyle(PILL_BADGE_LIGHT, props)}
    />
  )
}
