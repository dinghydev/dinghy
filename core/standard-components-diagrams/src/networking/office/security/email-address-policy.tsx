import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAIL_ADDRESS_POLICY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.email_address_policy;',
  },
  _width: 55,
  _height: 53,
}

export function EmailAddressPolicy(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMAIL_ADDRESS_POLICY}
      {...props}
      _style={extendStyle(EMAIL_ADDRESS_POLICY, props)}
    />
  )
}
