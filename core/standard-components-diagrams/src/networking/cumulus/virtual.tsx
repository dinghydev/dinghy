import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL = {
  _style:
    'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#EB4770;dashed=1;dashPattern=5 5;',
  _width: 100,
  _height: 100,
}

export function Virtual(props: DiagramNodeProps) {
  return <Dependency {...VIRTUAL} {...props} />
}
