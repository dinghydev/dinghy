import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WADCFG_DIAGNOSTICS_FILE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.wadcfg_diagnostics_file;pointerEvents=1;',
  _width: 47.5,
  _height: 50,
}

export function WadcfgDiagnosticsFile(props: DiagramNodeProps) {
  return (
    <Shape
      {...WADCFG_DIAGNOSTICS_FILE}
      {...props}
      _style={extendStyle(WADCFG_DIAGNOSTICS_FILE, props)}
    />
  )
}
