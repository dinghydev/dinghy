import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLET_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.tablet_2;',
  },
  _width: 82,
  _height: 86,
}

export function Tablet2(props: DiagramNodeProps) {
  return (
    <Shape {...TABLET_2} {...props} _style={extendStyle(TABLET_2, props)} />
  )
}
