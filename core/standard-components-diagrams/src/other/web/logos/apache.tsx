import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APACHE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.apache',
  },
  _width: 42.6,
  _height: 85.2,
}

export function Apache(props: DiagramNodeProps) {
  return <Shape {...APACHE} {...props} _style={extendStyle(APACHE, props)} />
}
