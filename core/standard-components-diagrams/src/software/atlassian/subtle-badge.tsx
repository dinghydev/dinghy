import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUBTLE_BADGE = {
  _style: {
    entity:
      'rounded=1;fillColor=#E3FCEF;strokeColor=none;html=1;fontColor=#016745;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=18;fontStyle=0;arcSize=50;sketch=0;',
  },
  _width: 40,
  _height: 25,
}

export function SubtleBadge(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUBTLE_BADGE}
      {...props}
      _style={extendStyle(SUBTLE_BADGE, props)}
    />
  )
}
