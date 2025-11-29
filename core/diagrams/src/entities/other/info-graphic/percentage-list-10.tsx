import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_10 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#dddddd;strokeColor=none;rounded=0;',
  },
  _width: 0,
  _height: 250,
}

export function PercentageList10(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PERCENTAGE_LIST_10)} />
}
