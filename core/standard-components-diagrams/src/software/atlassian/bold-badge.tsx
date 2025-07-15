import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOLD_BADGE = {
  _style:
    'rounded=1;fillColor=#0065FF;strokeColor=none;html=1;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=18;fontStyle=1;arcSize=50;sketch=0;',
  _width: 40,
  _height: 25,
}

export function BoldBadge(props: DiagramNodeProps) {
  return <Shape {...BOLD_BADGE} {...props} />
}
