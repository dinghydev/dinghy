import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOLIDIFIER_OPEN = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.solidifier_(open);',
  _width: 80,
  _height: 120,
}

export function SolidifierOpen(props: DiagramNodeProps) {
  return <Shape {...SOLIDIFIER_OPEN} {...props} />
}
