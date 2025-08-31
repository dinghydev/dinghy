import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCLE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.circle;strokeColor=#222222;fillColor=none;',
  },
  _width: 12,
  _height: 12,
}

export function Circle(props: DiagramNodeProps) {
  return <Shape {...CIRCLE} {...props} _style={extendStyle(CIRCLE, props)} />
}
