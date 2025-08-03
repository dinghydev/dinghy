import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INNER_CLASS = {
  _style: {
    dependency:
      'endArrow=circlePlus;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;labelBackgroundColor=none;',
  },
}

export function InnerClass(props: DiagramNodeProps) {
  return <Dependency {...INNER_CLASS} {...props} />
}
