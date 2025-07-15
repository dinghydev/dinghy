import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTACT_BADGE_PRESSED = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.contact_badge_pressed;sketch=0;',
  _width: 40,
  _height: 40,
}

export function ContactBadgePressed(props: DiagramNodeProps) {
  return <Shape {...CONTACT_BADGE_PRESSED} {...props} />
}
