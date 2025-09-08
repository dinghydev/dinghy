import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AWS_SNOWBALL_EDGE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.snowball_edge;',
  },
  _original_width: 80,
  _original_height: 110,
}

export function AwsSnowballEdge(props: DiagramNodeProps) {
  return (
    <Shape
      {...AWS_SNOWBALL_EDGE}
      {...props}
      _style={extendStyle(AWS_SNOWBALL_EDGE, props)}
    />
  )
}
