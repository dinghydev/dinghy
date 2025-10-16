import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FACEBOOK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.facebook;fillColor=#6294E4;gradientColor=#1A2665',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Facebook(props: DiagramNodeProps) {
  return (
    <Shape {...FACEBOOK} {...props} _style={extendStyle(FACEBOOK, props)} />
  )
}
