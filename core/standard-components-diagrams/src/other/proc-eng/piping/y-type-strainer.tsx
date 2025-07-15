import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const Y_TYPE_STRAINER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.y-type_strainer;pointerEvents=1;',
  _width: 50,
  _height: 35,
}

export function YTypeStrainer(props: DiagramNodeProps) {
  return <Shape {...Y_TYPE_STRAINER} {...props} />
}
