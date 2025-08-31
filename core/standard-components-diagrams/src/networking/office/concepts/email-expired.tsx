import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAIL_EXPIRED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.email_expired;',
  },
  _width: 56,
  _height: 46,
}

export function EmailExpired(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMAIL_EXPIRED}
      {...props}
      _style={extendStyle(EMAIL_EXPIRED, props)}
    />
  )
}
