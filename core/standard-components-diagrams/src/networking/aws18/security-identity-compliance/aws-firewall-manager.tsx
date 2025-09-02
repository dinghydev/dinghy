import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AWS_FIREWALL_MANAGER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.firewall_manager;',
  },
  _original_width: 80,
  _original_height: 110,
}

export function AwsFirewallManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...AWS_FIREWALL_MANAGER}
      {...props}
      _style={extendStyle(AWS_FIREWALL_MANAGER, props)}
    />
  )
}
