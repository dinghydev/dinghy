import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BASKET_STRAINER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.basket_strainer;',
  _width: 50,
  _height: 45,
}

export function BasketStrainer(props: DiagramNodeProps) {
  return <Shape {...BASKET_STRAINER} {...props} />
}
