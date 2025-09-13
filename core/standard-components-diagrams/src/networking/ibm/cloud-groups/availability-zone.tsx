import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AVAILABILITY_ZONE = {
  _style: {
    container:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#878D96;fillColor=none;dashed=1;dashPattern=1 3;strokeWidth=2',
    entity: {
      strokeColor: '#878D96',
    },
  },
}

export function AvailabilityZone(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVAILABILITY_ZONE}
      {...props}
      _style={extendStyle(AVAILABILITY_ZONE, props)}
    />
  )
}
