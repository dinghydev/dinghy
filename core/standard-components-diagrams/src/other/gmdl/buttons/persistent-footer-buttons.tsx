import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERSISTENT_FOOTER_BUTTONS = {
  _style:
    'swimlane;shape=rect;strokeColor=#EEEEEE;fillColor=#ffffff;fontColor=#2196F3;fontStyle=0;childLayout=stackLayout;horizontal=0;startSize=0;horizontalStack=1;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 40,
}

export function PersistentFooterButtons(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERSISTENT_FOOTER_BUTTONS}
      {...props}
      _style={extendStyle(PERSISTENT_FOOTER_BUTTONS, props)}
    />
  )
}
