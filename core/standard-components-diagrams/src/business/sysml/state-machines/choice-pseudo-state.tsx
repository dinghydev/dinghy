import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHOICE_PSEUDO_STATE = {
  _style:
    'shape=rhombus;html=1;labelPosition=right;align=left;verticalAlign=middle',
  _width: 150,
  _height: 100,
}

export function ChoicePseudoState(props: DiagramNodeProps) {
  return <Shape {...CHOICE_PSEUDO_STATE} {...props} />
}
