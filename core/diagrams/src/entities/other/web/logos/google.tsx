import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GOOGLE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google',
  },
  _original_width: 65.2,
  _original_height: 69.4,
}

export function Google(props: DiagramNodeProps) {
  return <Shape {...GOOGLE} {...props} _style={extendStyle(GOOGLE, props)} />
}
