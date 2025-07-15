import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOSE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.hose;',
  _width: 180,
  _height: 30,
}

export function Hose(props: DiagramNodeProps) {
  return <Shape {...HOSE} {...props} />
}
