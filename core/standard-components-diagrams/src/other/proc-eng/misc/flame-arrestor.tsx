import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLAME_ARRESTOR = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.flame_arrestor;',
  _width: 100,
  _height: 40,
}

export function FlameArrestor(props: DiagramNodeProps) {
  return <Shape {...FLAME_ARRESTOR} {...props} />
}
