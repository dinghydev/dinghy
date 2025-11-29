import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROCESS_BAR = {
  _style: {
    entity:
      'swimlane;childLayout=stackLayout;horizontal=1;fillColor=none;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;strokeColor=none;stackBorder=10;stackSpacing=-12;resizable=1;align=center;points=[];whiteSpace=wrap;html=1;',
  },
  _width: 296,
  _height: 100,
}

export function ProcessBar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROCESS_BAR)} />
}
