import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EC2_INSTANCE_CONTAINER = {
  _style: {
    group:
      'dashed=0;html=1;shape=mxgraph.aws3.instance;fillColor=#F58536;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#F58536',
    },
  },
}

export function Ec2InstanceContainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...EC2_INSTANCE_CONTAINER}
      {...props}
      _style={extendStyle(EC2_INSTANCE_CONTAINER, props)}
    />
  )
}
