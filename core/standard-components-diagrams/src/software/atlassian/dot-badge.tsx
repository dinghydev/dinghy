import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOT_BADGE = {
  _style: {
    entity: 'shape=ellipse;fillColor=#0065FF;strokeColor=none;html=1;sketch=0;',
  },
  _original_width: 10,
  _original_height: 10,
}

export function DotBadge(props: DiagramNodeProps) {
  return (
    <Shape {...DOT_BADGE} {...props} _style={extendStyle(DOT_BADGE, props)} />
  )
}
