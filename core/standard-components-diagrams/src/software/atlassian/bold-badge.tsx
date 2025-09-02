import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOLD_BADGE = {
  _style: {
    entity:
      'rounded=1;fillColor=#0065FF;strokeColor=none;html=1;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=18;fontStyle=1;arcSize=50;sketch=0;',
  },
  _original_width: 40,
  _original_height: 25,
}

export function BoldBadge(props: DiagramNodeProps) {
  return (
    <Shape {...BOLD_BADGE} {...props} _style={extendStyle(BOLD_BADGE, props)} />
  )
}
