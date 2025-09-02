import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_LIBRARY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.tape_library;',
  },
  _original_width: 96.8,
  _original_height: 98,
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
