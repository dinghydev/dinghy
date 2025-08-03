import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_5 = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#2EAB6D;dashed=1;dashPattern=5 5;',
  },
}

export function Virtual5(props: DiagramNodeProps) {
  return <Dependency {...VIRTUAL_5} {...props} />
}
