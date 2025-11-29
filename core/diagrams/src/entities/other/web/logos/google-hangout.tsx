import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GOOGLE_HANGOUT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_hangout;fillColor=#4BA139;strokeColor=none',
  },
  _original_width: 64.8,
  _original_height: 75.4,
}

export function GoogleHangout(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GOOGLE_HANGOUT)} />
}
