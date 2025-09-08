import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARTIFACT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=artifact',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Artifact(props: DiagramNodeProps) {
  return (
    <Shape {...ARTIFACT} {...props} _style={extendStyle(ARTIFACT, props)} />
  )
}
