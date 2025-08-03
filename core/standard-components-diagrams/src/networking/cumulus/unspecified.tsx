import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNSPECIFIED = {
  _style: {
    dependency: 'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;',
  },
}

export function Unspecified(props: DiagramNodeProps) {
  return <Dependency {...UNSPECIFIED} {...props} />
}
