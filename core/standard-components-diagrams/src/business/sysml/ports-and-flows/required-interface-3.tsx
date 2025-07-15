import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REQUIRED_INTERFACE_3 = {
  _style:
    'edgeStyle=none;html=1;align=left;verticalAlign=top;endArrow=sysMLProvInt;endSize=12;exitX=0;exitY=0.5;',
  _width: 2,
  _height: 60,
}

export function RequiredInterface3(props: DiagramNodeProps) {
  return <Shape {...REQUIRED_INTERFACE_3} {...props} />
}
