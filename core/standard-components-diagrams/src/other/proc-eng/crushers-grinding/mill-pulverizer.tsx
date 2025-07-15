import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MILL_PULVERIZER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill,_pulverizer;',
  _width: 100,
  _height: 60,
}

export function MillPulverizer(props: DiagramNodeProps) {
  return <Shape {...MILL_PULVERIZER} {...props} />
}
