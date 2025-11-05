import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIRECT_ACCESS_FEATURE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.direct_access_feature',
  },
  _original_width: 50,
  _original_height: 44,
}

export function DirectAccessFeature(props: NodeProps) {
  return (
    <Shape
      {...DIRECT_ACCESS_FEATURE}
      {...props}
      _style={extendStyle(DIRECT_ACCESS_FEATURE, props)}
    />
  )
}
