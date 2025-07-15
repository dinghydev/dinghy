import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ORIFICE_QUICK_CHANGE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.orifice_(quick_change);',
  _width: 10,
  _height: 50,
}

export function OrificeQuickChange(props: DiagramNodeProps) {
  return <Shape {...ORIFICE_QUICK_CHANGE} {...props} />
}
