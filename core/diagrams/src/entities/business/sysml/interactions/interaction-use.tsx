import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERACTION_USE = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;labelX=40;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 60,
}

export function InteractionUse(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTERACTION_USE)} />
}
