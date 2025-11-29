import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_7 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#AE4132;strokeColor=none;shadow=0;',
  },
  _width: 8,
  _height: 190,
}

export function PercentageList7(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PERCENTAGE_LIST_7)} />
}
