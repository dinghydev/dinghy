import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAPE_LIBRARY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_library;',
  },
  _width: 28.000000000000004,
  _height: 35,
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
