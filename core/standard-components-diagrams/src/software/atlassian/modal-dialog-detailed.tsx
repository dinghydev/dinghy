import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MODAL_DIALOG_DETAILED = {
  _style: {
    entity:
      'html=1;rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;fontSize=12;align=left;fontColor=#000000;shadow=1;arcSize=1;whiteSpace=wrap;spacing=20;verticalAlign=top',
  },
  _original_width: 330,
  _original_height: 210,
}

export function ModalDialogDetailed(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODAL_DIALOG_DETAILED}
      {...props}
      _style={extendStyle(MODAL_DIALOG_DETAILED, props)}
    />
  )
}
