import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CD = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.cd;',
  },
  _original_width: 68,
  _original_height: 26,
}

export function Cd(props: DiagramNodeProps) {
  return <Shape {...CD} {...props} _style={extendStyle(CD, props)} />
}
