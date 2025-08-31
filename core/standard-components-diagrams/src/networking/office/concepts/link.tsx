import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.link;',
  },
  _width: 61,
  _height: 21,
}

export function Link(props: DiagramNodeProps) {
  return <Shape {...LINK} {...props} _style={extendStyle(LINK, props)} />
}
