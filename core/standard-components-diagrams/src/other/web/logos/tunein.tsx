import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUNEIN = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.tunein',
  },
  _original_width: 70,
  _original_height: 70,
}

export function Tunein(props: DiagramNodeProps) {
  return <Shape {...TUNEIN} {...props} _style={extendStyle(TUNEIN, props)} />
}
