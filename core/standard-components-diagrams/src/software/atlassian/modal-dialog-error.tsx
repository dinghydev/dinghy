import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODAL_DIALOG_ERROR = {
  _style: {
    entity:
      'html=1;rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;fontSize=12;align=left;fontColor=#000000;shadow=1;arcSize=1;whiteSpace=wrap;spacing=20;verticalAlign=top;spacingTop=30;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 470,
  _original_height: 190,
}

export function ModalDialogError(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODAL_DIALOG_ERROR}
      {...props}
      _style={extendStyle(MODAL_DIALOG_ERROR, props)}
    />
  )
}
