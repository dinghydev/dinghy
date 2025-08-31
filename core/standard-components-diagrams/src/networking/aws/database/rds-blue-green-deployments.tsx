import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RDS_BLUE_GREEN_DEPLOYMENTS = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.rds_blue_green_deployments;',
  _width: 78,
  _height: 59,
}

export function RdsBlueGreenDeployments(props: DiagramNodeProps) {
  return (
    <Shape
      {...RDS_BLUE_GREEN_DEPLOYMENTS}
      {...props}
      _style={extendStyle(RDS_BLUE_GREEN_DEPLOYMENTS, props)}
    />
  )
}
