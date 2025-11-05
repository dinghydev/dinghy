import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTACT_BADGE_PRESSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.contact_badge_pressed;sketch=0;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function ContactBadgePressed(props: NodeProps) {
  return (
    <Shape
      {...CONTACT_BADGE_PRESSED}
      {...props}
      _style={extendStyle(CONTACT_BADGE_PRESSED, props)}
    />
  )
}
