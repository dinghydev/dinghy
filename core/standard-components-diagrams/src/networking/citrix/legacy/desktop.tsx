import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESKTOP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.desktop;',
  },
  _width: 89,
  _height: 98,
}

export function Desktop(props: DiagramNodeProps) {
  return <Shape {...DESKTOP} {...props} _style={extendStyle(DESKTOP, props)} />
}
