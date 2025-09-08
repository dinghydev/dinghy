import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARTIFACT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=artifact;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Artifact(props: DiagramNodeProps) {
  return (
    <Shape {...ARTIFACT} {...props} _style={extendStyle(ARTIFACT, props)} />
  )
}
