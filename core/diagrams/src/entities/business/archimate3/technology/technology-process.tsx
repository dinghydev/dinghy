import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TECHNOLOGY_PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=proc;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function TechnologyProcess(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TECHNOLOGY_PROCESS)} />
}
