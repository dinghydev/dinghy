import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=proc;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function BusinessProcess(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_PROCESS}
      {...props}
      _style={extendStyle(BUSINESS_PROCESS, props)}
    />
  )
}
