import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_10G = {
  _style:
    'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#FB9F41;',
  _width: 100,
  _height: 100,
}

export function Component10g(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_10G} {...props} />
}
