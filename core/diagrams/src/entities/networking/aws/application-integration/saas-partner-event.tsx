import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAAS_PARTNER_EVENT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.eventbridge_saas_partner_event_bus_resource;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function SaasPartnerEvent(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAAS_PARTNER_EVENT}
      {...props}
      _style={extendStyle(SAAS_PARTNER_EVENT, props)}
    />
  )
}
