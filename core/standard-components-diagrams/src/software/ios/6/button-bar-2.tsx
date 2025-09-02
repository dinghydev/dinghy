import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_BAR_2 = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=#C4C4C4;fillColor=#ffffff;fontColor=#999999;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 80,
}

export function ButtonBar2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_BAR_2}
      {...props}
      _style={extendStyle(BUTTON_BAR_2, props)}
    />
  )
}
