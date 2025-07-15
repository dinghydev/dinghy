import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEPARATOR_PERMANENT_MAGNET = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(permanent_magnet)2;',
  _width: 80,
  _height: 120,
}

export function SeparatorPermanentMagnet(props: DiagramNodeProps) {
  return <Shape {...SEPARATOR_PERMANENT_MAGNET} {...props} />
}
