import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SONICO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.sonico;fillColor=#3FEAF6;gradientColor=#117EC9',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Sonico(props: DiagramNodeProps) {
  return <Shape {...SONICO} {...props} _style={extendStyle(SONICO, props)} />
}
