import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERALIZATION = {
  _style: {
    dependency: 'endArrow=block;endSize=16;endFill=0;html=1;',
  },
}

export function Generalization(props: DiagramNodeProps) {
  return <Dependency {...GENERALIZATION} {...props} />
}
