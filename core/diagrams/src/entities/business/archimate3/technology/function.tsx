import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.function;',
  },
  _width: 60,
  _height: 40,
}

export function Function(props: NodeProps) {
  return (
    <Shape {...FUNCTION} {...props} _style={extendStyle(FUNCTION, props)} />
  )
}
