import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_FORM_LABEL_SIZING_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=none;strokeColor=#999999;align=left;spacing=15;fontSize=12;fontColor=#6C767D;',
  },
  _width: 1,
  _height: 110,
}

export function HorizontalFormLabelSizing2(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FORM_LABEL_SIZING_2}
      {...props}
      _style={extendStyle(HORIZONTAL_FORM_LABEL_SIZING_2, props)}
    />
  )
}
