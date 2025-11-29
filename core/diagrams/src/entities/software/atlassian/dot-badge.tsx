import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOT_BADGE = {
  _style: {
    entity: 'shape=ellipse;fillColor=#0065FF;strokeColor=none;html=1;sketch=0;',
  },
  _original_width: 10,
  _original_height: 10,
}

export function DotBadge(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOT_BADGE)} />
}
