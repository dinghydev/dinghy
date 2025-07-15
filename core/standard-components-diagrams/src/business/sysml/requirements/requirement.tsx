import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REQUIREMENT = {
  _style:
    'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;',
  _width: 0,
  _height: 100,
}

export function Requirement(props: DiagramNodeProps) {
  return <Shape {...REQUIREMENT} {...props} />
}
