import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TROPHY = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.trophy;',
  _width: 28.5,
  _height: 30,
}

export function Trophy(props: DiagramNodeProps) {
  return <Shape {...TROPHY} {...props} />
}
