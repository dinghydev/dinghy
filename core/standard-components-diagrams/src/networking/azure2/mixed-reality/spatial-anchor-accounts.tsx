import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPATIAL_ANCHOR_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/mixed_reality/Spatial_Anchor_Accounts.svg;strokeColor=none;',
  },
  _original_width: 66.8,
  _original_height: 68,
}

export function SpatialAnchorAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPATIAL_ANCHOR_ACCOUNTS}
      {...props}
      _style={extendStyle(SPATIAL_ANCHOR_ACCOUNTS, props)}
    />
  )
}
