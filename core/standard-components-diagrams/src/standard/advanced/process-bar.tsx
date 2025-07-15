import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROCESS_BAR = {
  _style:
    'swimlane;childLayout=stackLayout;horizontal=1;fillColor=none;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;strokeColor=none;stackBorder=10;stackSpacing=-12;resizable=1;align=center;points=[];whiteSpace=wrap;html=1;',
  _width: 296,
  _height: 100,
}

export function ProcessBar(props: DiagramNodeProps) {
  return <Shape {...PROCESS_BAR} {...props} />
}
