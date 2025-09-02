import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const N4G = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.n4g;fillColor=#000000;strokeColor=none',
  },
  _original_width: 88.2,
  _original_height: 31.8,
}

export function N4g(props: DiagramNodeProps) {
  return <Shape {...N4G} {...props} _style={extendStyle(N4G, props)} />
}
