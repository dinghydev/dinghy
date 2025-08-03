import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPOSITION_2 = {
  _style: {
    dependency: 'endArrow=diamondThin;endFill=1;endSize=24;html=1;',
  },
}

export function Composition2(props: DiagramNodeProps) {
  return <Dependency {...COMPOSITION_2} {...props} />
}
