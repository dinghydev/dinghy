import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_FORM_LABEL_SIZING_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=none;strokeColor=#999999;align=left;spacing=15;fontSize=16;fontColor=#6C767D;',
  },
  _width: 5,
  _height: 110,
}

export function HorizontalFormLabelSizing4(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FORM_LABEL_SIZING_4}
      {...props}
      _style={extendStyle(HORIZONTAL_FORM_LABEL_SIZING_4, props)}
    />
  )
}
