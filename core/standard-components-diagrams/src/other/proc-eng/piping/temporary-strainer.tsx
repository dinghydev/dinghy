import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEMPORARY_STRAINER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.temporary_strainer;',
  _width: 30,
  _height: 30,
}

export function TemporaryStrainer(props: DiagramNodeProps) {
  return <Shape {...TEMPORARY_STRAINER} {...props} />
}
