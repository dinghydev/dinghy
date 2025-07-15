import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTITY = {
  _style:
    'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=20;fillColor=#ffffff;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;swimlaneFillColor=#ffffff;',
  _width: 100,
  _height: 50,
}

export function Entity(props: DiagramNodeProps) {
  return <Shape {...ENTITY} {...props} />
}
