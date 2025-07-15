import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCRIPT_FILE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.script_file;pointerEvents=1;',
  _width: 47.5,
  _height: 50,
}

export function ScriptFile(props: DiagramNodeProps) {
  return <Shape {...SCRIPT_FILE} {...props} />
}
