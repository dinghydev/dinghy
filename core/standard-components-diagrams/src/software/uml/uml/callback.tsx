import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALLBACK = {
  _style:
    'html=1;verticalAlign=bottom;endArrow=block;curved=0;rounded=0;entryX=1;entryY=0;entryDx=0;entryDy=5;',
  _width: 1,
  _height: 80,
}

export function Callback(props: DiagramNodeProps) {
  return <Shape {...CALLBACK} {...props} />
}
