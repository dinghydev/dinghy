import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIP_URI_UM_DIAL_PLAN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.sip_uri_um_dial_plan;',
  },
  _width: 55,
  _height: 56,
}

export function SipUriUmDialPlan(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIP_URI_UM_DIAL_PLAN}
      {...props}
      _style={extendStyle(SIP_URI_UM_DIAL_PLAN, props)}
    />
  )
}
