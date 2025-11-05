import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEBSITE_GENERIC = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.website_generic;fillColor=#7D7D7D;',
  },
  _original_width: 50,
  _original_height: 44,
}

export function WebsiteGeneric(props: NodeProps) {
  return (
    <Shape
      {...WEBSITE_GENERIC}
      {...props}
      _style={extendStyle(WEBSITE_GENERIC, props)}
    />
  )
}
