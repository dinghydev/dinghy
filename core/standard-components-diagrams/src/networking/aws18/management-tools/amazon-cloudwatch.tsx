import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AMAZON_CLOUDWATCH = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.cloudwatch;',
  },
  _width: 80,
  _height: 110,
}

export function AmazonCloudwatch(props: DiagramNodeProps) {
  return (
    <Shape
      {...AMAZON_CLOUDWATCH}
      {...props}
      _style={extendStyle(AMAZON_CLOUDWATCH, props)}
    />
  )
}
