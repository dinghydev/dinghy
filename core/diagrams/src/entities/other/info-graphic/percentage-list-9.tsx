import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_9 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#23445D;strokeColor=none;shadow=0;',
  },
  _width: 11,
  _height: 190,
}

export function PercentageList9(props: NodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_9}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_9, props)}
    />
  )
}
