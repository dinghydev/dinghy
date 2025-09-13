import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTO_SCALING_GROUP = {
  _style: {
    container:
      'rounded=1;arcSize=10;dashed=1;fillColor=none;gradientColor=none;dashPattern=8 3 1 3;strokeWidth=2;',
  },
}

export function AutoScalingGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTO_SCALING_GROUP}
      {...props}
      _style={extendStyle(AUTO_SCALING_GROUP, props)}
    />
  )
}
