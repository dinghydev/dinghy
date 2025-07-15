import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_2 = {
  _style:
    'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#FB9F41;dashed=1;dashPattern=5 5;',
  _width: 100,
  _height: 100,
}

export function Virtual2(props: DiagramNodeProps) {
  return <Dependency {...VIRTUAL_2} {...props} />
}
