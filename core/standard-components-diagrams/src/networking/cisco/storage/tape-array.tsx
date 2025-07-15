import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAPE_ARRAY = {
  _style:
    'shape=mxgraph.cisco.storage.tape_array;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 43,
  _height: 62,
}

export function TapeArray(props: DiagramNodeProps) {
  return <Shape {...TAPE_ARRAY} {...props} />
}
