import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SITE_COLLECTION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.site_collection;',
  },
  _original_width: 52,
  _original_height: 40,
}

export function SiteCollection(props: DiagramNodeProps) {
  return (
    <Shape
      {...SITE_COLLECTION}
      {...props}
      _style={extendStyle(SITE_COLLECTION, props)}
    />
  )
}
