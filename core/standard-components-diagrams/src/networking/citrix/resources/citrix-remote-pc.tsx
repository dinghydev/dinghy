import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CITRIX_REMOTE_PC = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_remote_pc;',
  _width: 42.455,
  _height: 50,
}

export function CitrixRemotePc(props: DiagramNodeProps) {
  return <Shape {...CITRIX_REMOTE_PC} {...props} />
}
