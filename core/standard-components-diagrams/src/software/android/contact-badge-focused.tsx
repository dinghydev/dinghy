import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTACT_BADGE_FOCUSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.contact_badge_focused;sketch=0;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function ContactBadgeFocused(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTACT_BADGE_FOCUSED}
      {...props}
      _style={extendStyle(CONTACT_BADGE_FOCUSED, props)}
    />
  )
}
