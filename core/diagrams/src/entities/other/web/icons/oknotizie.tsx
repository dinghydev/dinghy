import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OKNOTIZIE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.oknotizie;gradientColor=#DFDEDE',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Oknotizie(props: NodeProps) {
  return (
    <Shape {...OKNOTIZIE} {...props} _style={extendStyle(OKNOTIZIE, props)} />
  )
}
