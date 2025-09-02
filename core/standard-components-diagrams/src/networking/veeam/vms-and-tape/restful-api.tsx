import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESTFUL_API = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.restful_apis;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function RestfulApi(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESTFUL_API}
      {...props}
      _style={extendStyle(RESTFUL_API, props)}
    />
  )
}
