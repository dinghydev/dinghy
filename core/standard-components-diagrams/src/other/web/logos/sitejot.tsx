import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SITEJOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sitejot',
  },
  _width: 77.2,
  _height: 66,
}

export function Sitejot(props: DiagramNodeProps) {
  return <Shape {...SITEJOT} {...props} _style={extendStyle(SITEJOT, props)} />
}
