import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.switch;',
  },
  _width: 110,
  _height: 58,
}

export function Switch(props: DiagramNodeProps) {
  return <Shape {...SWITCH} {...props} _style={extendStyle(SWITCH, props)} />
}
