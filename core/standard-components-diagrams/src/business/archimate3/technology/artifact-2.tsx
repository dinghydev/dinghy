import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARTIFACT_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=note;size=14;',
  _width: 70,
  _height: 35,
}

export function Artifact2(props: DiagramNodeProps) {
  return <Shape {...ARTIFACT_2} {...props} />
}
