import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_INTERACTION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.interaction;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function BusinessInteraction2(props: NodeProps) {
  return (
    <Shape
      {...BUSINESS_INTERACTION_2}
      {...props}
      _style={extendStyle(BUSINESS_INTERACTION_2, props)}
    />
  )
}
