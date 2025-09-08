import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHROME = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.chrome;gradientColor=#DFDEDE',
  },
  _original_width: 103.2,
  _original_height: 104,
}

export function Chrome(props: DiagramNodeProps) {
  return <Shape {...CHROME} {...props} _style={extendStyle(CHROME, props)} />
}
