import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LETTER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.letter;',
  },
  _original_width: 28.000000000000004,
  _original_height: 20,
}

export function Letter(props: DiagramNodeProps) {
  return <Shape {...LETTER} {...props} _style={extendStyle(LETTER, props)} />
}
