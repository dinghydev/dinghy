import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECONDARY_SITE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.secondary_site',
  },
  _original_width: 41,
  _original_height: 50,
}

export function SecondarySite(props: NodeProps) {
  return (
    <Shape
      {...SECONDARY_SITE}
      {...props}
      _style={extendStyle(SECONDARY_SITE, props)}
    />
  )
}
