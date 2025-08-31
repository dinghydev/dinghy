import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_GROUP = {
  _style: {
    group:
      'rounded=1;arcSize=10;dashed=1;strokeColor=#ff0000;fillColor=none;gradientColor=none;dashPattern=8 4;strokeWidth=2;',
    entity: {
      strokeColor: '#ff0000',
    },
  },
}

export function SecurityGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_GROUP}
      {...props}
      _style={extendStyle(SECURITY_GROUP, props)}
    />
  )
}
