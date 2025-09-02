import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_LIBRARY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_library;',
  },
  _original_width: 28.000000000000004,
  _original_height: 35,
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
