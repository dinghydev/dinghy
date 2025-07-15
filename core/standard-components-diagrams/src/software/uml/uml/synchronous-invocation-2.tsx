import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SYNCHRONOUS_INVOCATION_2 = {
  _style:
    'html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;curved=0;rounded=0;exitX=0;exitY=1;exitDx=0;exitDy=-5;',
  _width: 2,
  _height: 80,
}

export function SynchronousInvocation2(props: DiagramNodeProps) {
  return <Shape {...SYNCHRONOUS_INVOCATION_2} {...props} />
}
