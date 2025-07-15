import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PICKER = {
  _style:
    'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=none;fillColor=none;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 160,
}

export function Picker(props: DiagramNodeProps) {
  return <Shape {...PICKER} {...props} />
}
