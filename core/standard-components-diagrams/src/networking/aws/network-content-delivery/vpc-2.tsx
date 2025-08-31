import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPC_2 = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.vpc_virtual_private_cloud_vpc;',
  _width: 78,
  _height: 76,
}

export function Vpc2(props: DiagramNodeProps) {
  return <Shape {...VPC_2} {...props} _style={extendStyle(VPC_2, props)} />
}
