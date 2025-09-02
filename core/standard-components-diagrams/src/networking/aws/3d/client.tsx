import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLIENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.client;aspect=fixed;strokeColor=none;fillColor=#777777;',
  },
  _original_width: 60,
  _original_height: 104,
}

export function Client(props: DiagramNodeProps) {
  return <Shape {...CLIENT} {...props} _style={extendStyle(CLIENT, props)} />
}
