import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MILL_VIBRATION = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill_(vibration)2;',
  _width: 100,
  _height: 60,
}

export function MillVibration(props: DiagramNodeProps) {
  return <Shape {...MILL_VIBRATION} {...props} />
}
