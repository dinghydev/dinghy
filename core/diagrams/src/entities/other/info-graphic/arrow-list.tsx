import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_LIST = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;rounded=0;',
  },
  _width: 0,
  _height: 220,
}

export function ArrowList(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARROW_LIST)} />
}
