import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AVAILABILITY_ZONE = {
  _style: {
    container:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_availability_zone;strokeColor=#E8E8E8;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#E8E8E8;dashed=1;',
    entity: {
      strokeColor: '#E8E8E8',
      fontColor: '#E8E8E8',
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
