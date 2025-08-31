import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAX_PARTNER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.fax_partner;',
  },
  _width: 45,
  _height: 56,
}

export function FaxPartner(props: DiagramNodeProps) {
  return (
    <Shape
      {...FAX_PARTNER}
      {...props}
      _style={extendStyle(FAX_PARTNER, props)}
    />
  )
}
