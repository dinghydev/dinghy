import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AVAILABILITY_ZONE = {
  _style: {
    group:
      'fillColor=none;strokeColor=#147EBA;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#147EBA;whiteSpace=wrap;html=1;',
    entity: {
      strokeColor: '#147EBA',
      fontColor: '#147EBA',
    },
  },
}

export function AvailabilityZone(props: DiagramNodeProps) {
  return <Shape {...AVAILABILITY_ZONE} {...props} />
}
