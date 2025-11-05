import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DROPDOWN_BUTTON_3 = {
  _style: {
    container:
      'swimlane;container=1;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#999999;fillColor=#ffffff;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
    entity: {
      strokeColor: '#999999',
      fillColor: '#ffffff',
    },
  },
}

export function DropdownButton3(props: NodeProps) {
  return (
    <Shape
      {...DROPDOWN_BUTTON_3}
      {...props}
      _style={extendStyle(DROPDOWN_BUTTON_3, props)}
    />
  )
}
