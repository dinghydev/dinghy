import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLATEAU_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.plateau;',
  },
  _original_width: 60,
  _original_height: 40,
}

export function Plateau2(props: DiagramNodeProps) {
  return (
    <Shape {...PLATEAU_2} {...props} _style={extendStyle(PLATEAU_2, props)} />
  )
}
