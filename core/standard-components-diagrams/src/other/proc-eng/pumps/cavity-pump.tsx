import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAVITY_PUMP = {
  _style:
    'shape=mxgraph.pid.pumps.cavity_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 123,
  _height: 35,
}

export function CavityPump(props: DiagramNodeProps) {
  return <Shape {...CAVITY_PUMP} {...props} />
}
