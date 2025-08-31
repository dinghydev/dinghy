import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VAULT = {
  _style:
    'shape=mxgraph.cisco.misc.vault;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 93,
  _height: 64,
}

export function Vault(props: DiagramNodeProps) {
  return <Shape {...VAULT} {...props} _style={extendStyle(VAULT, props)} />
}
