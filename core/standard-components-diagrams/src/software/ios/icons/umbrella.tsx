import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UMBRELLA = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.umbrella;',
  _width: 30,
  _height: 30,
}

export function Umbrella(props: DiagramNodeProps) {
  return <Shape {...UMBRELLA} {...props} />
}
