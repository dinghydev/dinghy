import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_LIST_5 = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;fillColor=#AE4132;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;rounded=0;',
  },
  _width: 4,
  _height: 220,
}

export function ArrowList5(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_LIST_5}
      {...props}
      _style={extendStyle(ARROW_LIST_5, props)}
    />
  )
}
