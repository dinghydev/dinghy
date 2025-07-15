import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONE_STRAINER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.cone_strainer;',
  _width: 30,
  _height: 30,
}

export function ConeStrainer(props: DiagramNodeProps) {
  return <Shape {...CONE_STRAINER} {...props} />
}
