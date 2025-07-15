import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PACKAGE = {
  _style:
    'html=1;shape=mxgraph.sysml.package;html=1;overflow=fill;whiteSpace=wrap;',
  _width: 300,
  _height: 135,
}

export function Package(props: DiagramNodeProps) {
  return <Shape {...PACKAGE} {...props} />
}
