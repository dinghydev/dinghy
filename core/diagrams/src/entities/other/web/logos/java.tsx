import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JAVA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.java',
  },
  _width: 34.4,
  _height: 65,
}

export function Java(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JAVA)} />
}
