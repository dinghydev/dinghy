import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EMAIL_EXPIRED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.email_expired;',
  },
  _original_width: 56,
  _original_height: 46,
}

export function EmailExpired(props: NodeProps) {
  return (
    <Shape
      {...EMAIL_EXPIRED}
      {...props}
      _style={extendStyle(EMAIL_EXPIRED, props)}
    />
  )
}
