import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SIMPLE_STATE_2 = {
  _style:
    'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;rounded=1;absoluteArcSize=1;arcSize=22;',
  _width: 0,
  _height: 100,
}

export function SimpleState2(props: DiagramNodeProps) {
  return <Shape {...SIMPLE_STATE_2} {...props} />
}
