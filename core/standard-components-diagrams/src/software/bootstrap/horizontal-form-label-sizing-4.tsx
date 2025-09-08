import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_FORM_LABEL_SIZING_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=none;strokeColor=#999999;align=left;spacing=15;fontSize=16;fontColor=#6C767D;',
  },
  _original_width: 5,
  _original_height: 110,
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
