import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODAL_DIALOG_SMALL = {
  _style:
    'html=1;rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;fontSize=20;align=left;fontColor=#000000;shadow=1;arcSize=1;whiteSpace=wrap;spacing=20;verticalAlign=top;fontStyle=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 410,
  _height: 410,
}

export function ModalDialogSmall(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODAL_DIALOG_SMALL}
      {...props}
      _style={extendStyle(MODAL_DIALOG_SMALL, props)}
    />
  )
}
