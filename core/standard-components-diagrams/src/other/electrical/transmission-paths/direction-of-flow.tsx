import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIRECTION_OF_FLOW = {
  _style: {
    dependency: 'endArrow=classicThin;html=1;strokeWidth=1;endSize=20;',
  },
}

export function DirectionOfFlow(props: DiagramNodeProps) {
  return <Dependency {...DIRECTION_OF_FLOW} {...props} />
}
