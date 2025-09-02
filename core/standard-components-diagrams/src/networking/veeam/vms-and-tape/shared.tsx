import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.shared;',
  },
  _original_width: 46,
  _original_height: 24.8,
}

export function Shared(props: DiagramNodeProps) {
  return <Shape {...SHARED} {...props} _style={extendStyle(SHARED, props)} />
}
