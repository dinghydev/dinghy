import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDIATOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.mediator;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 74,
  _original_height: 82,
}

export function Mediator(props: NodeProps) {
  return (
    <Shape {...MEDIATOR} {...props} _style={extendStyle(MEDIATOR, props)} />
  )
}
