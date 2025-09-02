import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECTOR = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.director;',
  },
  _original_width: 50,
  _original_height: 43.055,
}

export function Director(props: DiagramNodeProps) {
  return (
    <Shape {...DIRECTOR} {...props} _style={extendStyle(DIRECTOR, props)} />
  )
}
