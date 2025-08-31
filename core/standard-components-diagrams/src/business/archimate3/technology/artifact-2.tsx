import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARTIFACT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=note;size=14;',
  },
  _width: 70,
  _height: 35,
}

export function Artifact2(props: DiagramNodeProps) {
  return (
    <Shape {...ARTIFACT_2} {...props} _style={extendStyle(ARTIFACT_2, props)} />
  )
}
