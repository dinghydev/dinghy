import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALERT = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.alert;',
  _width: 33.2,
  _height: 33.2,
}

export function Alert(props: DiagramNodeProps) {
  return <Shape {...ALERT} {...props} _style={extendStyle(ALERT, props)} />
}
