import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AMAZON = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.amazon',
  },
  _width: 62.800000000000004,
  _height: 68.2,
}

export function Amazon(props: DiagramNodeProps) {
  return <Shape {...AMAZON} {...props} _style={extendStyle(AMAZON, props)} />
}
