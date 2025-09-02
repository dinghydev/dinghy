import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHROME = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.chrome',
  },
  _original_width: 74.8,
  _original_height: 75.4,
}

export function Chrome(props: DiagramNodeProps) {
  return <Shape {...CHROME} {...props} _style={extendStyle(CHROME, props)} />
}
