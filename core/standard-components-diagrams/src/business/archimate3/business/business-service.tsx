import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_SERVICE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=serv;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function BusinessService(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_SERVICE}
      {...props}
      _style={extendStyle(BUSINESS_SERVICE, props)}
    />
  )
}
