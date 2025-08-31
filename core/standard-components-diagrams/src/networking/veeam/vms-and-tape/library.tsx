import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIBRARY = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.library;',
  _width: 48,
  _height: 36.8,
}

export function Library(props: DiagramNodeProps) {
  return <Shape {...LIBRARY} {...props} _style={extendStyle(LIBRARY, props)} />
}
