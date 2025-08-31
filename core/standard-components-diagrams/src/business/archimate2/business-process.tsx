import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=process',
  },
  _width: 100,
  _height: 75,
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
