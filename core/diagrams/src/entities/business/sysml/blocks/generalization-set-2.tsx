import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERALIZATION_SET_2 = {
  _style: {
    entity: 'edgeStyle=none;html=1;endArrow=block;endFill=0;endSize=12;',
  },
  _width: 150,
  _height: 80,
}

export function GeneralizationSet2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GENERALIZATION_SET_2)} />
}
