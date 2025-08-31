import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIO_BUTTONS = {
  _style:
    'swimlane;shape=mxgraph.bootstrap.rrect;rSize=3;strokeColor=#666666;fillColor=#ffffff;fontColor=#666666;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=0;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 50,
}

export function RadioButtons(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIO_BUTTONS}
      {...props}
      _style={extendStyle(RADIO_BUTTONS, props)}
    />
  )
}
