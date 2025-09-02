import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMS_GATEWAY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.sms_gateway;',
  },
  _original_width: 59,
  _original_height: 37,
}

export function SmsGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMS_GATEWAY}
      {...props}
      _style={extendStyle(SMS_GATEWAY, props)}
    />
  )
}
