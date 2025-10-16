import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AVAILABILITY_ZONE = {
  _style: {
    container:
      'fillColor=none;strokeColor=#147EBA;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#147EBA;whiteSpace=wrap;html=1;',
    entity: {
      strokeColor: '#147EBA',
      fontColor: '#147EBA',
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
