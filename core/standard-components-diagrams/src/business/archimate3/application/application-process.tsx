import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=proc;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function ApplicationProcess(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_PROCESS}
      {...props}
      _style={extendStyle(APPLICATION_PROCESS, props)}
    />
  )
}
