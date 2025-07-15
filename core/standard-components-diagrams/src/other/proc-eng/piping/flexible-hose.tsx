import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLEXIBLE_HOSE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.flexible_hose;pointerEvents=1;',
  _width: 50,
  _height: 25,
}

export function FlexibleHose(props: DiagramNodeProps) {
  return <Shape {...FLEXIBLE_HOSE} {...props} />
}
