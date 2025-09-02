import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_NAVIGATION = {
  _style: {
    entity:
      'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=none;fillColor=none;fontColor=#0085FC;fontStyle=0;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 30,
}

export function HorizontalNavigation(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_NAVIGATION}
      {...props}
      _style={extendStyle(HORIZONTAL_NAVIGATION, props)}
    />
  )
}
