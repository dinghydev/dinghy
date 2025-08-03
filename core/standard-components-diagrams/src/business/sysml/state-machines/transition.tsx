import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSITION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;strokeWidth=3;verticalAlign=bottom;',
  },
}

export function Transition(props: DiagramNodeProps) {
  return <Dependency {...TRANSITION} {...props} />
}
