import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VAULT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vault;fillColor=#E05243;gradientColor=none;',
  _width: 54,
  _height: 75,
}

export function Vault(props: DiagramNodeProps) {
  return <Shape {...VAULT} {...props} />
}
