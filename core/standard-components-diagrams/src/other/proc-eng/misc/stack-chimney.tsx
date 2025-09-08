import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STACK_CHIMNEY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.stack,_chimney;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function StackChimney(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACK_CHIMNEY}
      {...props}
      _style={extendStyle(STACK_CHIMNEY, props)}
    />
  )
}
