import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_HUB = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mobile_hub;fillColor=#AD688A;gradientColor=#F58435;gradientDirection=west;pointerEvents=1',
  },
  _original_width: 75,
  _original_height: 81,
}

export function MobileHub(props: NodeProps) {
  return (
    <Shape {...MOBILE_HUB} {...props} _style={extendStyle(MOBILE_HUB, props)} />
  )
}
