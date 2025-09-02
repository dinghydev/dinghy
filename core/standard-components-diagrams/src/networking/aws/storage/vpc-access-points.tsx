import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPC_ACCESS_POINTS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.vpc_access_points;',
  },
  _original_width: 53,
  _original_height: 78,
}

export function VpcAccessPoints(props: DiagramNodeProps) {
  return (
    <Shape
      {...VPC_ACCESS_POINTS}
      {...props}
      _style={extendStyle(VPC_ACCESS_POINTS, props)}
    />
  )
}
