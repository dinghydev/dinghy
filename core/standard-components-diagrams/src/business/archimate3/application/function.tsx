import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.function;',
  },
  _original_width: 60,
  _original_height: 40,
}

export function Function(props: DiagramNodeProps) {
  return (
    <Shape {...FUNCTION} {...props} _style={extendStyle(FUNCTION, props)} />
  )
}
