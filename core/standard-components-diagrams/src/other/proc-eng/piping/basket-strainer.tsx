import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BASKET_STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.basket_strainer;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function BasketStrainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...BASKET_STRAINER}
      {...props}
      _style={extendStyle(BASKET_STRAINER, props)}
    />
  )
}
