import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILE_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.file_2;pointerEvents=1;',
  _width: 47.5,
  _height: 50,
}

export function File2(props: DiagramNodeProps) {
  return <Shape {...FILE_2} {...props} />
}
