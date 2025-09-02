import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MACIE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.macie;fillColor=#34BBC9;gradientColor=none;pointerEvents=1',
  },
  _original_width: 133.5,
  _original_height: 54,
}

export function Macie(props: DiagramNodeProps) {
  return <Shape {...MACIE} {...props} _style={extendStyle(MACIE, props)} />
}
