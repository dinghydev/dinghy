import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SYNCHRONOUS_INVOCATION = {
  _style:
    'html=1;verticalAlign=bottom;endArrow=block;curved=0;rounded=0;entryX=0;entryY=0;entryDx=0;entryDy=5;',
  _width: 1,
  _height: 80,
}

export function SynchronousInvocation(props: DiagramNodeProps) {
  return <Shape {...SYNCHRONOUS_INVOCATION} {...props} />
}
