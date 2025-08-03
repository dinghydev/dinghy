import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LINE = {
  _style: {
    dependency: 'endArrow=none;html=1;',
  },
}

export function Line(props: DiagramNodeProps) {
  return <Dependency {...LINE} {...props} />
}
