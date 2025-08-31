import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SYNCHRONOUS_INVOCATION = {
  _style: {
    entity:
      'html=1;verticalAlign=bottom;endArrow=block;curved=0;rounded=0;entryX=0;entryY=0;entryDx=0;entryDy=5;',
  },
  _width: 1,
  _height: 80,
}

export function SynchronousInvocation(props: DiagramNodeProps) {
  return (
    <Shape
      {...SYNCHRONOUS_INVOCATION}
      {...props}
      _style={extendStyle(SYNCHRONOUS_INVOCATION, props)}
    />
  )
}
