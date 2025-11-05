import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_HOTFIX = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mobile_hotfix;',
  },
  _original_width: 50.099999999999994,
  _original_height: 50.099999999999994,
}

export function MobileHotfix(props: NodeProps) {
  return (
    <Shape
      {...MOBILE_HOTFIX}
      {...props}
      _style={extendStyle(MOBILE_HOTFIX, props)}
    />
  )
}
