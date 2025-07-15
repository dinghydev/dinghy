import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INNER_CLASS = {
  _style:
    'endArrow=open;startArrow=circlePlus;endFill=0;startFill=0;endSize=8;html=1;',
  _width: 160,
  _height: 0,
}

export function InnerClass(props: DiagramNodeProps) {
  return <Dependency {...INNER_CLASS} {...props} />
}
