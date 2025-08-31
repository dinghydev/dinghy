import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEBSITE_GENERIC = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.website_generic;fillColor=#7D7D7D;',
  },
  _width: 50,
  _height: 44,
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
