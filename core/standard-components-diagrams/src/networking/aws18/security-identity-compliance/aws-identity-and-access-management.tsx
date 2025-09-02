import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AWS_IDENTITY_AND_ACCESS_MANAGEMENT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.identity_and_access_management;',
  },
  _original_width: 80,
  _original_height: 120,
}

export function AwsIdentityAndAccessManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...AWS_IDENTITY_AND_ACCESS_MANAGEMENT}
      {...props}
      _style={extendStyle(AWS_IDENTITY_AND_ACCESS_MANAGEMENT, props)}
    />
  )
}
