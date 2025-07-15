import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMPLEMENTATION = {
  _style: 'endArrow=block;dashed=1;endFill=0;endSize=12;html=1;',
  _width: 160,
  _height: 0,
}

export function Implementation(props: DiagramNodeProps) {
  return <Dependency {...IMPLEMENTATION} {...props} />
}
