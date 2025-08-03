import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REALIZATION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endSize=12;endArrow=block;endFill=0;dashed=1;',
  },
}

export function Realization(props: DiagramNodeProps) {
  return <Dependency {...REALIZATION} {...props} />
}
