import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_LIBRARY = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.tape_library;',
  _width: 62,
  _height: 74,
}

export function TapeLibrary(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_LIBRARY}
      {...props}
      _style={extendStyle(TAPE_LIBRARY, props)}
    />
  )
}
