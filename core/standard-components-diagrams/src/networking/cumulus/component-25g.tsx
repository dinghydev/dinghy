import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_25G = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#FCC548;',
  },
}

export function Component25g(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_25G} {...props} />
}
