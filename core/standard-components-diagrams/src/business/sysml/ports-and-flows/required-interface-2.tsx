import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REQUIRED_INTERFACE_2 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=left;verticalAlign=bottom;endArrow=sysMLReqInt;endSize=8;exitX=0;exitY=0.5;',
  },
  _width: 1,
  _height: 60,
}

export function RequiredInterface2(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIRED_INTERFACE_2}
      {...props}
      _style={extendStyle(REQUIRED_INTERFACE_2, props)}
    />
  )
}
