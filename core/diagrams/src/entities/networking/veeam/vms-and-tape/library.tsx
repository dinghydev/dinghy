import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIBRARY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.library;',
  },
  _width: 48,
  _height: 36.8,
}

export function Library(props: NodeProps) {
  return <Shape {...LIBRARY} {...props} _style={extendStyle(LIBRARY, props)} />
}
