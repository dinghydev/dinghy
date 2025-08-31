import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_LIST_9 = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;fillColor=#12AAB5;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;rounded=0;',
  },
  _width: 8,
  _height: 220,
}

export function ArrowList9(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_LIST_9}
      {...props}
      _style={extendStyle(ARROW_LIST_9, props)}
    />
  )
}
