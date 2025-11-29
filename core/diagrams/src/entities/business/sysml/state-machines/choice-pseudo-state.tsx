import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHOICE_PSEUDO_STATE = {
  _style: {
    entity:
      'shape=rhombus;html=1;labelPosition=right;align=left;verticalAlign=middle',
  },
  _width: 150,
  _height: 100,
}

export function ChoicePseudoState(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHOICE_PSEUDO_STATE)} />
}
