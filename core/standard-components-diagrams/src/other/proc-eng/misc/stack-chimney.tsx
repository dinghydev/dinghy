import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STACK_CHIMNEY = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.stack,_chimney;',
  _width: 60,
  _height: 100,
}

export function StackChimney(props: DiagramNodeProps) {
  return <Shape {...STACK_CHIMNEY} {...props} />
}
