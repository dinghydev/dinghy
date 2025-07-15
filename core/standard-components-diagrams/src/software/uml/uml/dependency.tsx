import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEPENDENCY = {
  _style: 'endArrow=open;endSize=12;dashed=1;html=1;',
  _width: 160,
  _height: 0,
}

export function Dependency(props: DiagramNodeProps) {
  return <Dependency {...DEPENDENCY} {...props} />
}
