import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCRIPT_FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.script_file;pointerEvents=1;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function ScriptFile(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCRIPT_FILE)} />
}
