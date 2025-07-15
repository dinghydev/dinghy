import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const T_TYPE_STRAINER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.t-type_strainer;',
  _width: 20,
  _height: 35,
}

export function TTypeStrainer(props: DiagramNodeProps) {
  return <Shape {...T_TYPE_STRAINER} {...props} />
}
