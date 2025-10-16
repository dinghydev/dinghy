import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WEBSITE_GENERIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.website_generic;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 42.5,
}

export function WebsiteGeneric(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEBSITE_GENERIC}
      {...props}
      _style={extendStyle(WEBSITE_GENERIC, props)}
    />
  )
}
