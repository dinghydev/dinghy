import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KEY = {
  _style: {
    entity:
      'points=[[0,0.5,0],[0.24,0,0],[0.5,0.28,0],[0.995,0.475,0],[0.5,0.72,0],[0.24,1,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.key;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 22.5,
}

export function Key(props: DiagramNodeProps) {
  return <Shape {...KEY} {...props} _style={extendStyle(KEY, props)} />
}
