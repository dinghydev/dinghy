import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LINK = {
  _style: {
    dependency: 'shape=link;html=1;',
  },
}

export function Link(props: DiagramNodeProps) {
  return <Dependency {...LINK} {...props} />
}
