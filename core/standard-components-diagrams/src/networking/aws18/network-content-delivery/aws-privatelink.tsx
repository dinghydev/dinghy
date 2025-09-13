import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AWS_PRIVATELINK = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.privatelink;',
  },
  _width: 80,
  _height: 110,
}

export function AwsPrivatelink(props: DiagramNodeProps) {
  return (
    <Shape
      {...AWS_PRIVATELINK}
      {...props}
      _style={extendStyle(AWS_PRIVATELINK, props)}
    />
  )
}
