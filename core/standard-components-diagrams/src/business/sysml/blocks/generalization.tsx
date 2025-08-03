import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERALIZATION = {
  _style: {
    dependency: 'edgeStyle=none;html=1;endSize=12;endArrow=block;endFill=0;',
  },
}

export function Generalization(props: DiagramNodeProps) {
  return <Dependency {...GENERALIZATION} {...props} />
}
