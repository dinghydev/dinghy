import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STRAINER_CONE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.strainer_(cone);',
  _width: 40,
  _height: 80,
}

export function StrainerCone(props: DiagramNodeProps) {
  return <Shape {...STRAINER_CONE} {...props} />
}
