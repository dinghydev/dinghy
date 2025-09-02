import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_FORM_5 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#0085FC;strokeColor=none;align=center;fontSize=14;fontColor=#FFFFFF;sketch=0;',
  },
  _original_width: 10,
  _original_height: 200,
}

export function HorizontalForm5(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FORM_5}
      {...props}
      _style={extendStyle(HORIZONTAL_FORM_5, props)}
    />
  )
}
