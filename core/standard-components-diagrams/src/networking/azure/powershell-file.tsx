import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERSHELL_FILE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.powershell_file;pointerEvents=1;',
  _width: 60,
  _height: 60,
}

export function PowershellFile(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWERSHELL_FILE}
      {...props}
      _style={extendStyle(POWERSHELL_FILE, props)}
    />
  )
}
