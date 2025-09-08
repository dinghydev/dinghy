import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APACHE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.apache',
  },
  _original_width: 42.6,
  _original_height: 85.2,
}

export function Apache(props: DiagramNodeProps) {
  return <Shape {...APACHE} {...props} _style={extendStyle(APACHE, props)} />
}
