import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SYSTEM_SOFTWARE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=sysSw;archiType=square;',
  _width: 150,
  _height: 75,
}

export function SystemSoftware(props: DiagramNodeProps) {
  return <Shape {...SYSTEM_SOFTWARE} {...props} />
}
