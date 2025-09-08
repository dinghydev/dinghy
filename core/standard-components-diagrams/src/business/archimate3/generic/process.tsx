import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=proc;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Process(props: DiagramNodeProps) {
  return <Shape {...PROCESS} {...props} _style={extendStyle(PROCESS, props)} />
}
