import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_LIST = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;rounded=0;',
  },
  _original_width: 0,
  _original_height: 220,
}

export function ArrowList(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_LIST} {...props} _style={extendStyle(ARROW_LIST, props)} />
  )
}
