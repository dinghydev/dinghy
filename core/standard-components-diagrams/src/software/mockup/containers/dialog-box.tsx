import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIALOG_BOX = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.containers.rrect;rSize=0;strokeColor=#666666;fontColor=#666666;fontSize=17;verticalAlign=top;whiteSpace=wrap;fillColor=#ffffff;spacingTop=32;',
  _width: 250,
  _height: 140,
}

export function DialogBox(props: DiagramNodeProps) {
  return (
    <Shape {...DIALOG_BOX} {...props} _style={extendStyle(DIALOG_BOX, props)} />
  )
}
