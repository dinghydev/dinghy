import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_8 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#BAC8D3;strokeColor=none;',
  },
  _width: 10,
  _height: 190,
}

export function PercentageList8(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PERCENTAGE_LIST_8)} />
}
