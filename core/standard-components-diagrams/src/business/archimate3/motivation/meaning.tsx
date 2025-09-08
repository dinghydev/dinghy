import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEANING = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=meaning;archiType=oct;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Meaning(props: DiagramNodeProps) {
  return <Shape {...MEANING} {...props} _style={extendStyle(MEANING, props)} />
}
