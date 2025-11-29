import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARTIFACT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=artifact;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function Artifact(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARTIFACT)} />
}
