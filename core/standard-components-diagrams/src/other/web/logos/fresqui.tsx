import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FRESQUI = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fresqui',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Fresqui(props: DiagramNodeProps) {
  return <Shape {...FRESQUI} {...props} _style={extendStyle(FRESQUI, props)} />
}
