import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_CATALOG = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.service_catalog;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function ServiceCatalog(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_CATALOG}
      {...props}
      _style={extendStyle(SERVICE_CATALOG, props)}
    />
  )
}
