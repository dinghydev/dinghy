import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CRUSHER_JAW = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.crusher_(jaw);',
  _width: 100,
  _height: 60,
}

export function CrusherJaw(props: DiagramNodeProps) {
  return <Shape {...CRUSHER_JAW} {...props} />
}
