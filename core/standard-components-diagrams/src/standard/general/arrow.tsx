import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW = {
  _style: {
    dependency: 'shape=flexArrow;endArrow=classic;html=1;',
  },
}

export function Arrow(props: DiagramNodeProps) {
  return <Dependency {...ARROW} {...props} />
}
