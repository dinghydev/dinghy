import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERTICAL_NAVIGATION = {
  _style:
    'swimlane;shape=mxgraph.bootstrap.anchor;strokeColor=none;fillColor=none;fontColor=#0085FC;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 200,
}

export function VerticalNavigation(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_NAVIGATION}
      {...props}
      _style={extendStyle(VERTICAL_NAVIGATION, props)}
    />
  )
}
