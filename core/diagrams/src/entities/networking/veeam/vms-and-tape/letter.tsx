import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LETTER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.letter;',
  },
  _width: 46.4,
  _height: 34.8,
}

export function Letter(props: DiagramNodeProps) {
  return <Shape {...LETTER} {...props} _style={extendStyle(LETTER, props)} />
}
