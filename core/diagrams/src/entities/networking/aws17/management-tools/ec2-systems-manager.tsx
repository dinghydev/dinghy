import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EC2_SYSTEMS_MANAGER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ec2_systems_manager;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 82.5,
}

export function Ec2SystemsManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...EC2_SYSTEMS_MANAGER}
      {...props}
      _style={extendStyle(EC2_SYSTEMS_MANAGER, props)}
    />
  )
}
