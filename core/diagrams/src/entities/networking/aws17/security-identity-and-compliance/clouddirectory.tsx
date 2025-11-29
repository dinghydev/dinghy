import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUDDIRECTORY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.clouddirectory;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 102,
  _height: 109.5,
}

export function Clouddirectory(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUDDIRECTORY)} />
}
