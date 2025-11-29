import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.interaction;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function Interaction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTERACTION)} />
}
