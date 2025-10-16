import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LYNC_PHONE_EDITION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.lync_phone_edition;',
  },
  _width: 80,
  _height: 45,
}

export function LyncPhoneEdition(props: DiagramNodeProps) {
  return (
    <Shape
      {...LYNC_PHONE_EDITION}
      {...props}
      _style={extendStyle(LYNC_PHONE_EDITION, props)}
    />
  )
}
