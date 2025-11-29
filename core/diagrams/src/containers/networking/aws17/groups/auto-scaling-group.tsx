import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTO_SCALING_GROUP = {
  _style: {
    container:
      'rounded=1;arcSize=10;dashed=1;fillColor=none;gradientColor=none;dashPattern=8 3 1 3;strokeWidth=2;',
  },
}

export function AutoScalingGroup(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AUTO_SCALING_GROUP)} />
}
