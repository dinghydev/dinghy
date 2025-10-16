import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLAXO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.plaxo;fillColor=#414F5C;strokeColor=none',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Plaxo(props: DiagramNodeProps) {
  return <Shape {...PLAXO} {...props} _style={extendStyle(PLAXO, props)} />
}
