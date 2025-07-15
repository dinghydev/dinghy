import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CRUSHER_HAMMER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.crusher_(hammer);',
  _width: 100,
  _height: 60,
}

export function CrusherHammer(props: DiagramNodeProps) {
  return <Shape {...CRUSHER_HAMMER} {...props} />
}
