import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARTIFACT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=artifact',
  },
  _width: 100,
  _height: 75,
}

export function Artifact(props: NodeProps) {
  return (
    <Shape {...ARTIFACT} {...props} _style={extendStyle(ARTIFACT, props)} />
  )
}
