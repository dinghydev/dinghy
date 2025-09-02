import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_ARRAY = {
  _style: {
    entity:
      'shape=mxgraph.cisco.storage.tape_array;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 43,
  _original_height: 62,
}

export function TapeArray(props: DiagramNodeProps) {
  return (
    <Shape {...TAPE_ARRAY} {...props} _style={extendStyle(TAPE_ARRAY, props)} />
  )
}
