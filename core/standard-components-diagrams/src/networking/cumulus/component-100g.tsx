import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_100G = {
  _style:
    'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#2EAB6D;',
  _width: 100,
  _height: 100,
}

export function Component100g(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_100G} {...props} />
}
