import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLANGE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.flange;pointerEvents=1;',
  _width: 5,
  _height: 20,
}

export function Flange(props: DiagramNodeProps) {
  return <Shape {...FLANGE} {...props} />
}
