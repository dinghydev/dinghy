import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

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

export function AvailabilityZone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AVAILABILITY_ZONE)} />
}
