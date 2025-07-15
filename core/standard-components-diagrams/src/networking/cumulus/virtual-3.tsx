import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_3 = {
  _style:
    'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#FCC548;dashed=1;dashPattern=5 5;',
  _width: 100,
  _height: 100,
}

export function Virtual3(props: DiagramNodeProps) {
  return <Dependency {...VIRTUAL_3} {...props} />
}
