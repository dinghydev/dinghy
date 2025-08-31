import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLOBE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.globe;',
  },
  _width: 78.5,
  _height: 75,
}

export function Globe(props: DiagramNodeProps) {
  return <Shape {...GLOBE} {...props} _style={extendStyle(GLOBE, props)} />
}
