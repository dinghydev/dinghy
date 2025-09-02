import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JSON_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.json_2',
  },
  _original_width: 80.4,
  _original_height: 25.200000000000003,
}

export function Json2(props: DiagramNodeProps) {
  return <Shape {...JSON_2} {...props} _style={extendStyle(JSON_2, props)} />
}
