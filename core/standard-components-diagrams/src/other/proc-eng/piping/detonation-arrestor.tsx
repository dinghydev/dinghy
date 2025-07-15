import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DETONATION_ARRESTOR = {
  _style:
    'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.detonation_arrestor;',
  _width: 50,
  _height: 20,
}

export function DetonationArrestor(props: DiagramNodeProps) {
  return <Shape {...DETONATION_ARRESTOR} {...props} />
}
