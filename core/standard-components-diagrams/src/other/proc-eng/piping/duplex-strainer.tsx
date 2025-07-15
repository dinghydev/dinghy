import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DUPLEX_STRAINER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.duplex_strainer;',
  _width: 50,
  _height: 40,
}

export function DuplexStrainer(props: DiagramNodeProps) {
  return <Shape {...DUPLEX_STRAINER} {...props} />
}
