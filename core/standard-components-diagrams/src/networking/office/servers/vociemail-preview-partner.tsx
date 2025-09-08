import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VOCIEMAIL_PREVIEW_PARTNER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.vociemail_preview_partner;',
  },
  _original_width: 46,
  _original_height: 56,
}

export function VociemailPreviewPartner(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOCIEMAIL_PREVIEW_PARTNER}
      {...props}
      _style={extendStyle(VOCIEMAIL_PREVIEW_PARTNER, props)}
    />
  )
}
