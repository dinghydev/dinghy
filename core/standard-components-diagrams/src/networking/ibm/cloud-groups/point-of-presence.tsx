import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

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
  return <Shape {...POINT_OF_PRESENCE} {...props} />
}
