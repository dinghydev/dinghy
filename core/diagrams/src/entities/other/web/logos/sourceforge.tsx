import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOURCEFORGE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sourceforge',
  },
  _original_width: 74.2,
  _original_height: 74.4,
}

export function Sourceforge(props: NodeProps) {
  return (
    <Shape
      {...SOURCEFORGE}
      {...props}
      _style={extendStyle(SOURCEFORGE, props)}
    />
  )
}
