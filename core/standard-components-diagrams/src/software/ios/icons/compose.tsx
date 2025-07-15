import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPOSE = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.compose;',
  _width: 29.099999999999998,
  _height: 29.099999999999998,
}

export function Compose(props: DiagramNodeProps) {
  return <Shape {...COMPOSE} {...props} />
}
