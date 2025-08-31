import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROPDOWN_BUTTON_6 = {
  _style: {
    group:
      'swimlane;container=1;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#999999;fillColor=#ffffff;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;marginTop=10;marginBottom=10;',
    entity: {
      strokeColor: '#999999',
      fillColor: '#ffffff',
    },
  },
}

export function DropdownButton6(props: DiagramNodeProps) {
  return (
    <Shape
      {...DROPDOWN_BUTTON_6}
      {...props}
      _style={extendStyle(DROPDOWN_BUTTON_6, props)}
    />
  )
}
