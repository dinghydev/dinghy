import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWERSHELL_FILE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.powershell_file;pointerEvents=1;',
  _width: 50,
  _height: 50,
}

export function PowershellFile(props: DiagramNodeProps) {
  return <Shape {...POWERSHELL_FILE} {...props} />
}
