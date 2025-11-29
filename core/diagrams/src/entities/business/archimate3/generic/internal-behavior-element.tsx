import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNAL_BEHAVIOR_ELEMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=generic;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function InternalBehaviorElement(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, INTERNAL_BEHAVIOR_ELEMENT)} />
  )
}
