import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCRIPT_FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.script_file;pointerEvents=1;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function ScriptFile(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCRIPT_FILE}
      {...props}
      _style={extendStyle(SCRIPT_FILE, props)}
    />
  )
}
