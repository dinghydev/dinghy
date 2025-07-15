import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTENSION = {
  _style:
    'endArrow=block;html=1;endFill=1;edgeStyle=none;endSize=12;labelBackgroundColor=none;align=left;',
  _width: 2,
  _height: 180,
}

export function Extension(props: DiagramNodeProps) {
  return <Shape {...EXTENSION} {...props} />
}
