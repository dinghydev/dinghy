import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EC2_SYSTEMS_MANAGER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ec2_systems_manager;fillColor=#759C3E;gradientColor=none;',
  _width: 79.5,
  _height: 82.5,
}

export function Ec2SystemsManager(props: DiagramNodeProps) {
  return <Shape {...EC2_SYSTEMS_MANAGER} {...props} />
}
