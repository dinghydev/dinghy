import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALERT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.alert;',
  },
  _original_width: 33.2,
  _original_height: 33.2,
}

export function Alert(props: DiagramNodeProps) {
  return <Shape {...ALERT} {...props} _style={extendStyle(ALERT, props)} />
}
