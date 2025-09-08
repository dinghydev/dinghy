import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORM_5 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#0085FC;strokeColor=none;align=center;fontSize=14;fontColor=#FFFFFF;',
  },
  _original_width: 6,
  _original_height: 500,
}

export function Form5(props: DiagramNodeProps) {
  return <Shape {...FORM_5} {...props} _style={extendStyle(FORM_5, props)} />
}
