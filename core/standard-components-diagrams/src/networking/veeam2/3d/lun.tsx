import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LUN = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.lun;',
  },
  _width: 72,
  _height: 40,
}

export function Lun(props: DiagramNodeProps) {
  return <Shape {...LUN} {...props} _style={extendStyle(LUN, props)} />
}
