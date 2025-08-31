import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_COLLABORATION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=collab;archiType=square;',
  _width: 150,
  _height: 75,
}

export function BusinessCollaboration(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_COLLABORATION}
      {...props}
      _style={extendStyle(BUSINESS_COLLABORATION, props)}
    />
  )
}
