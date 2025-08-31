import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOFA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.sofa;',
  },
  _width: 90,
  _height: 80,
}

export function Sofa(props: DiagramNodeProps) {
  return <Shape {...SOFA} {...props} _style={extendStyle(SOFA, props)} />
}
