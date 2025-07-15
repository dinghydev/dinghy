import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BRIEFCASE = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.briefcase;',
  _width: 30,
  _height: 20.099999999999998,
}

export function Briefcase(props: DiagramNodeProps) {
  return <Shape {...BRIEFCASE} {...props} />
}
