import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HTML5 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.html5',
  },
  _width: 52.400000000000006,
  _height: 74,
}

export function Html5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HTML5)} />
}
