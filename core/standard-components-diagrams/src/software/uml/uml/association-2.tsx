import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATION_2 = {
  _style: {
    dependency: 'endArrow=block;startArrow=block;endFill=1;startFill=1;html=1;',
  },
}

export function Association2(props: DiagramNodeProps) {
  return <Dependency {...ASSOCIATION_2} {...props} />
}
