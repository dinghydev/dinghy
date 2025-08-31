import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEY = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.key;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 48,
  _height: 19,
}

export function Key(props: DiagramNodeProps) {
  return <Shape {...KEY} {...props} _style={extendStyle(KEY, props)} />
}
