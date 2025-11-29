import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURITY_GROUP = {
  _style: {
    container:
      'rounded=1;arcSize=10;dashed=1;strokeColor=#ff0000;fillColor=none;gradientColor=none;dashPattern=8 4;strokeWidth=2;',
    entity: {
      strokeColor: '#ff0000',
    },
  },
}

export function SecurityGroup(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SECURITY_GROUP)} />
}
