import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GOOGLE_HANGOUT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.google_hangout;gradientColor=#DFDEDE',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function GoogleHangout(props: NodeProps) {
  return (
    <Shape
      {...GOOGLE_HANGOUT}
      {...props}
      _style={extendStyle(GOOGLE_HANGOUT, props)}
    />
  )
}
