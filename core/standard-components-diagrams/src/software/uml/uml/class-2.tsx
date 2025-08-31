import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLASS_2 = {
  _style:
    'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 110,
}

export function Class2(props: DiagramNodeProps) {
  return <Shape {...CLASS_2} {...props} _style={extendStyle(CLASS_2, props)} />
}
