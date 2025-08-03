import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INCLUDE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  },
}

export function Include(props: DiagramNodeProps) {
  return <Dependency {...INCLUDE} {...props} />
}
