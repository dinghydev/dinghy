import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCUMENT_DB_FILE = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.code_file',
  _width: 47,
  _height: 50,
}

export function DocumentDbFile(props: DiagramNodeProps) {
  return <Shape {...DOCUMENT_DB_FILE} {...props} />
}
