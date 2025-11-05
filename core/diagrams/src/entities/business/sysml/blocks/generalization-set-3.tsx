import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERALIZATION_SET_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=none;dashed=1;labelPosition=right;align=left;',
  },
  _width: 3,
  _height: 80,
}

export function GeneralizationSet3(props: NodeProps) {
  return (
    <Shape
      {...GENERALIZATION_SET_3}
      {...props}
      _style={extendStyle(GENERALIZATION_SET_3, props)}
    />
  )
}
