import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WADCFG_DIAGNOSTICS_FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.wadcfg_diagnostics_file;pointerEvents=1;',
  },
  _original_width: 47.5,
  _original_height: 50,
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
