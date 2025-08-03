import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_10G = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#FB9F41;',
  },
}

export function Component10g(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_10G} {...props} />
}
