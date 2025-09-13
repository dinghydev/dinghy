import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VPC_GATEWAY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.vpcGateway;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 116.7,
  _height: 102.8,
}

export function VpcGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...VPC_GATEWAY}
      {...props}
      _style={extendStyle(VPC_GATEWAY, props)}
    />
  )
}
