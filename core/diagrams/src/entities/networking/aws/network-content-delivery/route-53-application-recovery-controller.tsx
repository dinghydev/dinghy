import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUTE_53_APPLICATION_RECOVERY_CONTROLLER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.route_53_application_recovery_controller;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function Route53ApplicationRecoveryController(props: NodeProps) {
  return (
    <Shape
      {...ROUTE_53_APPLICATION_RECOVERY_CONTROLLER}
      {...props}
      _style={extendStyle(ROUTE_53_APPLICATION_RECOVERY_CONTROLLER, props)}
    />
  )
}
