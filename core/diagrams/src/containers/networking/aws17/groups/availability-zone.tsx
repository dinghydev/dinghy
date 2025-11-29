import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVAILABILITY_ZONE = {
  _style: {
    container:
      'rounded=1;arcSize=10;dashed=1;strokeColor=#F59D56;fillColor=none;gradientColor=none;dashPattern=8 4;strokeWidth=2;',
    entity: {
      strokeColor: '#F59D56',
    },
  },
}

export function AvailabilityZone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AVAILABILITY_ZONE)} />
}
