import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STACK_CHIMNEY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.stack,_chimney;',
  },
  _width: 60,
  _height: 100,
}

export function StackChimney(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STACK_CHIMNEY)} />
}
