import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HATENA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.hatena',
  },
  _original_width: 86.2,
  _original_height: 44.2,
}

export function Hatena(props: DiagramNodeProps) {
  return <Shape {...HATENA} {...props} _style={extendStyle(HATENA, props)} />
}
