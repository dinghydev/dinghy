import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PACKAGE = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;html=1;overflow=fill;whiteSpace=wrap;',
  },
  _original_width: 300,
  _original_height: 135,
}

export function Package(props: DiagramNodeProps) {
  return <Shape {...PACKAGE} {...props} _style={extendStyle(PACKAGE, props)} />
}
