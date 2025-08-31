import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PACKAGE = {
  _style:
    'html=1;shape=mxgraph.sysml.package;html=1;overflow=fill;whiteSpace=wrap;',
  _width: 300,
  _height: 135,
}

export function Package(props: DiagramNodeProps) {
  return <Shape {...PACKAGE} {...props} _style={extendStyle(PACKAGE, props)} />
}
