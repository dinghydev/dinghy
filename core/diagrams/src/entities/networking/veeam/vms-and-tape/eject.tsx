import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EJECT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.eject;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function Eject(props: DiagramNodeProps) {
  return <Shape {...EJECT} {...props} _style={extendStyle(EJECT, props)} />
}
