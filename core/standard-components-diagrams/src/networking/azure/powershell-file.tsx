import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERSHELL_FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.powershell_file;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 50,
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
