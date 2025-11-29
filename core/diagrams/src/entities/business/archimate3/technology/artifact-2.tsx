import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARTIFACT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=note;size=14;',
  },
  _width: 70,
  _height: 35,
}

export function Artifact2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARTIFACT_2)} />
}
