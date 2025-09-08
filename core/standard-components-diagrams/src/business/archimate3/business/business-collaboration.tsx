import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_COLLABORATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=collab;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
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
