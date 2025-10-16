import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIIGO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.diigo;fillColor=#2C7DE0;gradientColor=#1E5599',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Diigo(props: DiagramNodeProps) {
  return <Shape {...DIIGO} {...props} _style={extendStyle(DIIGO, props)} />
}
