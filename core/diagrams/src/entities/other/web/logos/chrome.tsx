import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHROME = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.chrome',
  },
  _original_width: 74.8,
  _original_height: 75.4,
}

export function Chrome(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHROME)} />
}
