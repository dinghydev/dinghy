import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHOICE_PSEUDO_STATE = {
  _style: {
    entity:
      'shape=rhombus;html=1;labelPosition=right;align=left;verticalAlign=middle',
  },
  _width: 150,
  _height: 100,
}

export function ChoicePseudoState(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHOICE_PSEUDO_STATE}
      {...props}
      _style={extendStyle(CHOICE_PSEUDO_STATE, props)}
    />
  )
}
