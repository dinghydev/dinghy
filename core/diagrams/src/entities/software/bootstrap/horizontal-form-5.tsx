import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_FORM_5 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#0085FC;strokeColor=none;align=center;fontSize=14;fontColor=#FFFFFF;sketch=0;',
  },
  _width: 10,
  _height: 200,
}

export function HorizontalForm5(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FORM_5}
      {...props}
      _style={extendStyle(HORIZONTAL_FORM_5, props)}
    />
  )
}
