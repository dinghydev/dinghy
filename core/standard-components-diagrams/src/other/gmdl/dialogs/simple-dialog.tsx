import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIMPLE_DIALOG = {
  _style:
    'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;fontSize=20;fontColor=#000000;align=left;spacing=16;verticalAlign=top;fontStyle=0;spacingTop=-5;recursiveResize=0;whiteSpace=wrap;html=1;',
  _width: 280,
  _height: 250,
}

export function SimpleDialog(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIMPLE_DIALOG}
      {...props}
      _style={extendStyle(SIMPLE_DIALOG, props)}
    />
  )
}
