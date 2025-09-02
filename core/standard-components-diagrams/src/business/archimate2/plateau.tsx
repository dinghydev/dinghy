import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLATEAU = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.tech;techType=plateau',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Plateau(props: DiagramNodeProps) {
  return <Shape {...PLATEAU} {...props} _style={extendStyle(PLATEAU, props)} />
}
