import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POINT_OF_PRESENCE = {
  _style: {
    group:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#878D96;fillColor=none;strokeWidth=1',
    entity: {
      strokeColor: '#878D96',
    },
  },
}

export function PointOfPresence(props: DiagramNodeProps) {
  return (
    <Shape
      {...POINT_OF_PRESENCE}
      {...props}
      _style={extendStyle(POINT_OF_PRESENCE, props)}
    />
  )
}
