import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPOSITION_2 = {
  _style: 'endArrow=diamondThin;endFill=1;endSize=24;html=1;',
  _width: 160,
  _height: 0,
}

export function Composition2(props: DiagramNodeProps) {
  return <Dependency {...COMPOSITION_2} {...props} />
}
