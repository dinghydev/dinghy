import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHEVRON_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.chevron_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 96,
  _height: 60,
}

export function ChevronArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_ARROW}
      {...props}
      _style={extendStyle(CHEVRON_ARROW, props)}
    />
  )
}
