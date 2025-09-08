import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PILL_BADGE_DARK = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=none;strokeWidth=1;fillColor=#343A40;fontColor=#ffffff;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=10;',
  },
  _original_width: 50,
  _original_height: 20,
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
