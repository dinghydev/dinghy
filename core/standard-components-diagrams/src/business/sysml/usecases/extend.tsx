import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTEND = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;startArrow=open;endArrow=none;startSize=12;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  },
}

export function Extend(props: DiagramNodeProps) {
  return <Dependency {...EXTEND} {...props} />
}
