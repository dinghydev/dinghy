import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALL_DIALOG = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iCallDialog;sketch=0;',
  _width: 150,
  _height: 125,
}

export function CallDialog(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALL_DIALOG}
      {...props}
      _style={extendStyle(CALL_DIALOG, props)}
    />
  )
}
