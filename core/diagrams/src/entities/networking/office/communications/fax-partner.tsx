import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FAX_PARTNER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.fax_partner;',
  },
  _original_width: 45,
  _original_height: 56,
}

export function FaxPartner(props: NodeProps) {
  return (
    <Shape
      {...FAX_PARTNER}
      {...props}
      _style={extendStyle(FAX_PARTNER, props)}
    />
  )
}
