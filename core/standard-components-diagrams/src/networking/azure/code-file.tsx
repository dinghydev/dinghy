import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CODE_FILE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.code_file;pointerEvents=1;',
  _width: 47.5,
  _height: 50,
}

export function CodeFile(props: DiagramNodeProps) {
  return (
    <Shape {...CODE_FILE} {...props} _style={extendStyle(CODE_FILE, props)} />
  )
}
