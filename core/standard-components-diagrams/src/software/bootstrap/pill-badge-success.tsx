import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PILL_BADGE_SUCCESS = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=none;strokeWidth=1;fillColor=#33A64C;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=10;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function PillBadgeSuccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...PILL_BADGE_SUCCESS}
      {...props}
      _style={extendStyle(PILL_BADGE_SUCCESS, props)}
    />
  )
}
