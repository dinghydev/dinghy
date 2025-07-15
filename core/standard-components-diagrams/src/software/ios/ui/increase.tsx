import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INCREASE = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.increase;strokeColor=#0080f0;sketch=0;',
  _width: 12,
  _height: 12,
}

export function Increase(props: DiagramNodeProps) {
  return <Shape {...INCREASE} {...props} />
}
