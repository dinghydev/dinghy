import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PILL_BADGE_DARK = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=none;strokeWidth=1;fillColor=#343A40;fontColor=#ffffff;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=10;',
  },
  _width: 50,
  _height: 20,
}

export function PillBadgeDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...PILL_BADGE_DARK}
      {...props}
      _style={extendStyle(PILL_BADGE_DARK, props)}
    />
  )
}
